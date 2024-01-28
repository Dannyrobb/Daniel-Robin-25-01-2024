import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Slices/movieSlice";
import inputReducer from "../Slices/inputSlice";
import favoritesReducer, { initFavorites } from "../Slices/favoritesSlice";
initFavorites();
export default configureStore({
  reducer: {
    movie: movieReducer,
    input: inputReducer,
    favorites: favoritesReducer,
  },
});
