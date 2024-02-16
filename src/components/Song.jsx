import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSelectedSong } from "../redux/actions";

export const Song = ({ song }) => {
	const dispatch = useDispatch();
	return (
		<Col className="text-center">
			<img
				src={song.album.cover_medium}
				alt={song.title}
				onClick={() => {
					dispatch(setSelectedSong(song));
				}}
				className="cursor-pointer"
			/>
			<p>
				Track : "{song.title}"<br />
				Artist : {song.artist.name}
				<br />
			</p>
		</Col>
	);
};
