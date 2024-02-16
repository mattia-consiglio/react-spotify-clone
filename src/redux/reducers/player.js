import { SET_SONG } from "../actions";

const initialState = {
	selectedSong: null,
};

const playerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SONG:
			return {
				...state,
				selectedSong: action.payload,
			};
		default:
			return state;
	}
};

export default playerReducer;
