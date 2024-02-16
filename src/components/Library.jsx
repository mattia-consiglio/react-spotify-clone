import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Library = () => {
	const library = useSelector((state) => state.library.songs);
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
												Artist: {song.artist.name}
												<br />
												Album: {song.album.title}
											</p>
										</Col>
										<Col xs={2}></Col>
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
