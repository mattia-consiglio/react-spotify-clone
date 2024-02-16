import { ADD_LIBRARY_SONG } from "../actions";

const initialState = {
	songs: [],
};

const libraryReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_LIBRARY_SONG:
			return {
				...state,
				songs: [...state.songs, action.payload],
			};
		case "REMOVE_LIBRARY_SONG": {
			return {
				...state,
				songs: state.songs.filter((song) => song.id !== action.payload),
			};
		}
		default:
			return state;
	}
};

export default libraryReducer;
