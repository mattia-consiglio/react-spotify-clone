export const SET_SONG = "SET_SONG";
export const SET_QUERY = "SET_QUERY";
export const ADD_LIBRARY_SONG = "ADD_LIBRARY_SONG";

export const setSelectedSong = (song) => ({
	type: SET_SONG,
	payload: song,
});

export const setSongs = (query, key) => async (dispatch) => {
	try {
		let response = await fetch(
			"https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query,
		);
		if (!response.ok) throw new Error("Error in fetching songs");

		let { data } = await response.json();
		dispatch({ type: SET_QUERY, payload: { content: data, key: key } });
	} catch (err) {
		console.log("error", err);
	}
};

export const addLibrarySong = (song) => ({
	type: ADD_LIBRARY_SONG,
	payload: song,
});

export const removeLibrarySong = (songId) => ({
	type: "REMOVE_LIBRARY_SONG",
	payload: songId,
});
