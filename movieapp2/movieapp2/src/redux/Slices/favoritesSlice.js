import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    list: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const newFavorite = action.payload;
      // Check if the new favorite is not already in the list
      if (!state.list.some((item) => item === newFavorite)) {
        state.list.push(newFavorite);
        localStorage.setItem("favorites", JSON.stringify(state.list));
      }
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter((item) => item.imdbID !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.list));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const selectFavorites = (state) => (state ? state.favorites.list : []);
export const initFavorites = () => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
  if (!storedFavorites) {
    localStorage.setItem("favorites", JSON.stringify([]));
  }
};

export default favoritesSlice.reducer;
