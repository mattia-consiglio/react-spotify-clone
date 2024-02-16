import { SET_QUERY } from "../actions";

const initialState = {
	songs1: [],
	songs2: [],
	songs3: [],
};

const songsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_QUERY:
			const key = action.payload.key;
			return {
				...state,
				[key]: action.payload.content,
			};
		default:
			return state;
	}
};

export default songsReducer;
