// src/redux/reducers.js
import { createSlice, combineReducers } from "@reduxjs/toolkit";

// Define your reducers here
const inputSlice = createSlice({
  name: "input",
  initialState: "",
  reducers: {
    setInput: (state, action) => action.payload,
  },
});

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: "",
  reducers: {
    setMovieDetails: (state, action) => action.payload,
  },
});

const rootReducer = combineReducers({
  input: inputSlice.reducer,
  movieDetails: movieDetailsSlice.reducer,
});

export const { setInput } = inputSlice.actions;
export const { setMovieDetails } = movieDetailsSlice.actions;

export default rootReducer;
