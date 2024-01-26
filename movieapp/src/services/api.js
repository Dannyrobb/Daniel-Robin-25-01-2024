// /src/services/api.js
import axios from "axios";
import { OMDB_API_KEY } from "../config";

const BASE_URL = "http://www.omdbapi.com/";

export const searchMovie = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${OMDB_API_KEY}&s=${query}`);
    return response.data.Search || [];
  } catch (error) {
    console.error("Error searching for movie:", error);
    return [];
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${OMDB_API_KEY}&i=${imdbID}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return {};
  }
};
