// // src/redux/Slices/movieSlice.js
// import { createSlice } from "@reduxjs/toolkit";
// import getMovieDetails from "../../api/movieDetails";

// const initialState = {
//   movieDetails: null,
//   loading: false,
//   error: null,
// };

// const movieSlice = createSlice({
//   name: "movie",
//   initialState,
//   reducers: {
//     fetchMovieDetailsStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchMovieDetailsSuccess: (state, action) => {
//       state.loading = false;
//       state.movieDetails = action.payload;
//     },
//     fetchMovieDetailsFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchMovieDetailsStart, fetchMovieDetailsSuccess, fetchMovieDetailsFailure } = movieSlice.actions;

// // Thunk action creator
// export const fetchMovieDetails = (imdbID) => async (dispatch) => {
//   try {
//     dispatch(fetchMovieDetailsStart());
//     const data = await getMovieDetails(imdbID);
//     dispatch(fetchMovieDetailsSuccess(data)); // Access action.payload, which should be the movie details
//   } catch (error) {
//     dispatch(fetchMovieDetailsFailure(error));
//   }
// };

// export const selectMovieDetails = (state) => state.movie.movieDetails;
// export const selectLoading = (state) => state.movie.loading;
// export const selectError = (state) => state.movie.error;

// export default movieSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import getCurrentMovie from "../../api/currentMovie";

const initialState = {
  movieDetails: null,
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchMovieDetailsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchMovieDetailsSuccess: (state, action) => {
      state.loading = false;
      state.movieDetails = action.payload;
    },
    fetchMovieDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMovieDetailsStart, fetchMovieDetailsSuccess, fetchMovieDetailsFailure } = movieSlice.actions;

// Thunk action creator
export const fetchMovieDetails = (imdbID) => async (dispatch) => {
  try {
    dispatch(fetchMovieDetailsStart());
    const data = await getCurrentMovie(imdbID);
    console.log(data);
    dispatch(fetchMovieDetailsSuccess(data));
  } catch (error) {
    dispatch(fetchMovieDetailsFailure(error));
  }
};

export const selectMovieDetails = (state) => state.movie.movieDetails;
export const selectLoading = (state) => state.movie.loading;
export const selectError = (state) => state.movie.error;

// Automatically fetch data for a default IMDb ID when the store initializes
export const fetchDefaultMovieDetails = () => async (dispatch) => {
  const defaultImdbID = "tt0133093"; // Set your default IMDb ID
  dispatch(fetchMovieDetails(defaultImdbID));
};

export default movieSlice.reducer;
