// redux/reducers.js
import { combineReducers } from "redux";
import { SEARCH_MOVIE, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./actions";

const movieDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      // Make API call to get movie details based on action.payload
      // Update state with fetched movie details
      return {
        id: 1, // Replace with actual movie ID
        title: "Matrix", // Replace with actual movie title
        actors: "Keanu Reeves, Laurence Fishburne", // Replace with actual actors
        releaseDate: "1999-03-31", // Replace with actual release date
        director: "Lana Wachowski, Lilly Wachowski", // Replace with actual director
        producer: "Joel Silver", // Replace with actual producer
      };
    default:
      return state;
  }
};

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVORITES:
      return state.filter((fav) => fav.id !== action.payload);
    default:
      return state;
  }
};

const searchTermReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movieDetails: movieDetailsReducer,
  favorites: favoritesReducer,
  searchTerm: searchTermReducer,
});

export default rootReducer;
