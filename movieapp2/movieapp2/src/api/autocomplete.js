import { BASE_URL, API_KEY } from "../config";
import axios from "axios";
const autocomplete = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}/?apikey=${API_KEY}&type=movie&s=${searchTerm}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching autocomplete:", error);
  }
};

export default autocomplete;
