import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Song } from "./Song";
import { setSongs } from "../redux/actions";

export const SongList = ({ heading, query, keyProp, idProp }) => {
	const dispatch = useDispatch();
	const songs = useSelector((state) => state.songs[keyProp]);

	useEffect(() => {
		dispatch(setSongs(query, keyProp));
	}, [dispatch, keyProp, query]);

	return (
		<Row>
			<Col xs={10}>
				<div id={idProp}>
					<h2>{heading}</h2>
					<Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
						{songs.slice(0, 4).map((song) => (
							<Song song={song} key={song.id} />
						))}
					</Row>
				</div>
			</Col>
		</Row>
	);
};
