// src/redux/actions.js

export const setInput = (input) => ({
  type: "SET_INPUT",
  payload: input,
});

export const setMovieDetails = (details) => ({
  type: "SET_MOVIE_DETAILS",
  payload: details,
});
