import axios from "axios";

import { BASE_URL, API_KEY } from "../config";
const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/?apikey=${API_KEY}&i=${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

export default getMovieDetails;
