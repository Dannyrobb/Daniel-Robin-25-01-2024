const API_KEY = "YOUR_OMDB_API_KEY";
const BASE_URL = "http://www.omdbapi.com/";

export const autocompleteSearch = async (query) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  return data.Search || [];
};

export const getCurrentMovie = async (id) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  const data = await response.json();
  return data;
};

export const getMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  const data = await response.json();
  return data;
};
