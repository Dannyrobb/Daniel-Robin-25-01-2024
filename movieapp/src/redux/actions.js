// redux/actions.js
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export const searchMovie = (searchTerm) => ({
  type: SEARCH_MOVIE,
  payload: searchTerm,
});

export const addToFavorites = (movie) => ({
  type: ADD_TO_FAVORITES,
  payload: movie,
});

export const removeFromFavorites = (movieId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: movieId,
});

export const setSearchTerm = (searchTerm) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});
