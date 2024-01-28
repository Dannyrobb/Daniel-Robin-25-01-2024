import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Slices/movieSlice";
import inputReducer from "../Slices/inputSlice";

export default configureStore({
  reducer: {
    movie: movieReducer,
    input: inputReducer,
  },
});
