import React, { useEffect, useState } from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addLibrarySong, removeLibrarySong } from "../redux/actions";

export const Player = () => {
	const selectedSong = useSelector((state) => state.player.selectedSong);
	const library = useSelector((state) => state.library);
	const isInLibrary = library.songs.some((song) => song.id === selectedSong.id);
	const [isplaying, setPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [duration, setDuration] = useState(0);
	const [audio, setAudio] = useState(null);
	const [isloaded, setLoaded] = useState(false);

	const dispatch = useDispatch();

	const loadSong = () => {
		if (audio !== null) {
			audio.pause();
			setPlaying(false);
			audio.src = "";
			setAudio(null);
			setLoaded(false);
		}
		if (selectedSong) {
			setAudio(new Audio(selectedSong.preview));
			setLoaded(true);
			//todo: set loaded status to true if the song is loaded
		}
	};

	const playSong = () => {
		if (isloaded) {
			if (!isplaying) {
				audio.play();
				setPlaying(true);
			} else {
				audio.pause();
				setPlaying(false);
			}
		} else {
			loadSong();
		}
	};

	useEffect(() => {
		loadSong();
	}, [selectedSong]);

	useEffect(() => {
		if (audio) {
			audio.ontimeupdate = () => {
				setProgress((audio.currentTime / audio.duration) * 100);
				setDuration(audio.duration * 100);
			};
		}
	}, [audio]);

	return (
		<Container fluid className="fixed-bottom bg-container pt-1">
			<Row className="h-100">
				<Col lg={10} className="offset-lg-2">
					<Row className="h-100   align-items-center">
						<Col xs={6} md={4} className="d-flex  align-items-center">
							{selectedSong && (
								<>
									<img
										src={selectedSong.album.cover_small}
										alt={selectedSong.title}
										className="me-3"
									/>
									<div>
										<div className="text-white">{selectedSong.title}</div>
										<div className="text-white">{selectedSong.artist.name}</div>
									</div>
									<div>
										<Button
											variant=""
											onClick={() => {
												isInLibrary
													? dispatch(removeLibrarySong(selectedSong))
													: dispatch(addLibrarySong(selectedSong));
											}}
										>
											{isInLibrary ? (
												<svg
													data-encore-id="icon"
													role="img"
													aria-hidden="true"
													viewBox="0 0 16 16"
													style={{
														width: "16px",
														height: "16px",
														fill: "#1ed760",
													}}
												>
													<path d="M15.724 4.22A4.313 4.313 0 0 0 12.192.814a4.269 4.269 0 0 0-3.622 1.13.837.837 0 0 1-1.14 0 4.272 4.272 0 0 0-6.21 5.855l5.916 7.05a1.128 1.128 0 0 0 1.727 0l5.916-7.05a4.228 4.228 0 0 0 .945-3.577z"></path>
												</svg>
											) : (
												<svg
													data-encore-id="icon"
													role="img"
													aria-hidden="true"
													viewBox="0 0 16 16"
													style={{
														width: "16px",
														height: "16px",
														fill: "#fff",
													}}
												>
													<path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65v.003a4.543 4.543 0 0 1-1.011 3.84L9.35 14.629a1.765 1.765 0 0 1-2.093.464 1.762 1.762 0 0 1-.605-.463L1.348 8.309A4.582 4.582 0 0 1 1.689 2zm3.158.252A3.082 3.082 0 0 0 2.49 7.337l.005.005L7.8 13.664a.264.264 0 0 0 .311.069.262.262 0 0 0 .09-.069l5.312-6.33a3.043 3.043 0 0 0 .68-2.573 3.118 3.118 0 0 0-2.551-2.463 3.079 3.079 0 0 0-2.612.816l-.007.007a1.501 1.501 0 0 1-2.045 0l-.009-.008a3.082 3.082 0 0 0-2.121-.861z"></path>
												</svg>
											)}
										</Button>
									</div>
								</>
							)}
						</Col>
						<Col xs={6} md={8}>
							<Row className="justify-content-center">
								<Col xs={12} md={4} className="playerControls">
									<div className="d-flex buttons">
										<Button variant="">
											{/* Shuffle */}
											<svg
												data-encore-id="icon"
												role="img"
												aria-hidden="true"
												viewBox="0 0 16 16"
											>
												<path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path>
												<path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path>
											</svg>
										</Button>
										<Button variant="">
											{/* Prev */}
											<svg
												data-encore-id="icon"
												role="img"
												aria-hidden="true"
												viewBox="0 0 16 16"
											>
												<path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
											</svg>
										</Button>

										<Button variant="" onClick={playSong}>
											{/* Play / Pause */}
											<div className="play-btn">
												{isplaying && (
													<svg
														data-encore-id="icon"
														role="img"
														aria-hidden="true"
														viewBox="0 0 16 16"
													>
														<path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
													</svg>
												)}
												{!isplaying && (
													<svg
														data-encore-id="icon"
														role="img"
														aria-hidden="true"
														viewBox="0 0 16 16"
													>
														<path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
													</svg>
												)}
											</div>
										</Button>
										<Button variant="">
											{/* Next */}
											<svg
												data-encore-id="icon"
												role="img"
												aria-hidden="true"
												viewBox="0 0 16 16"
											>
												<path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
											</svg>
										</Button>
										<Button variant="">
											{/* Repeat */}
											<svg
												data-encore-id="icon"
												role="img"
												aria-hidden="true"
												viewBox="0 0 16 16"
											>
												<path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
											</svg>
										</Button>
									</div>
									<ProgressBar now={progress} className="mt-3" variant="" />
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
