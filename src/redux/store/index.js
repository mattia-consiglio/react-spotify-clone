import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songsReducer from "../reducers/songs";
import playerReducer from "../reducers/player";
import libraryReducer from "../reducers/libary";

const rootStore = combineReducers({
	songs: songsReducer,
	player: playerReducer,
	library: libraryReducer,
});

const store = configureStore({
	reducer: rootStore,
});

export default store;
