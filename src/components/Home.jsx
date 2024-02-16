import React from "react";
import { Col, Row } from "react-bootstrap";
import { SongList } from "./SongList";

export const Home = () => {
	return (
		<div className="mainPage">
			<Row>
				<Col xs={9} lg={11} className="d-none d-md-flex mainLinks">
					<a href="#">TRENDING</a>
					<a href="#">PODCAST</a>
					<a href="#">MOODS AND GENRES</a>
					<a href="#">NEW RELEASES</a>
					<a href="#">DISCOVER</a>
				</Col>
			</Row>
			<SongList
				heading="Rock Classics"
				query="queen"
				keyProp="songs1"
				idProp="rock"
			/>
			<SongList
				heading="Pop Culture"
				query="katyperry"
				keyProp="songs2"
				idProp="pop"
			/>
			<SongList
				heading="#HipHop"
				query="eminem"
				keyProp="songs3"
				idProp="hiphop"
			/>
		</div>
	);
};
