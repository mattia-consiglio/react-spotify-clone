import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeLibrarySong } from "../redux/actions";

export const Library = () => {
	const library = useSelector((state) => state.library.songs);
	const dispatch = useDispatch();

	return (
		<div className="librarySection">
			<Row className="mt-4">
				<Col>
					<h2 className="text-white">Library</h2>
				</Col>
			</Row>
			<Row>
				{library.map((song) => {
					return (
						<Col xs={12} key={song.id} className="mt-4">
							<Row>
								<Col xs={2}>
									<img src={song.album.cover_small} alt={song.title} />
								</Col>
								<Col xs={10}>
									<Row>
										<Col xs={10}>
											<h4>{song.title}</h4>
											<p>
												{song.artist.name}
												<br />
												{song.album.title}
											</p>
										</Col>
										<Col xs={2}>
											<Button
												variant=""
												onClick={() => {
													dispatch(removeLibrarySong(song));
												}}
											>
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
											</Button>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};
