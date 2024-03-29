import axios from "axios";

import { BASE_URL, API_KEY } from "../config";

//Getcurrentmovie api endpoint

const getCurrentMovie = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/?apikey=${API_KEY}&i=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching current movie:", error);
  }
};

export default getCurrentMovie;
