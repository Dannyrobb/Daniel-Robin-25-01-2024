// /src/pages/Home.js
import React, { useState, useEffect, useContext } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { AppContext } from "../../App";
import MovieDetails from "./MovieDetails";
import { searchMovie, getMovieDetails } from "../../services/api";

const Home = () => {
  const { darkMode } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentMovie, setCurrentMovie] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Fetch default movie (Matrix) on initial render
    fetchMovieDetails("Matrix");
  }, []);

  const fetchMovieDetails = async (movieTitle) => {
    const movie = await searchMovie(movieTitle);
    if (movie && movie.length > 0) {
      const movieDetails = await getMovieDetails(movie[0].imdbID);
      setCurrentMovie(movieDetails);
      // Check if the current movie is in favorites
      // (You may implement this based on your actual favorites storage logic)
      setIsFavorite(false); // Example: Assume not in favorites initially
    }
  };

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      fetchMovieDetails(searchTerm);
    }
  };

  const handleToggleFavorite = () => {
    // Implement logic to add/remove from favorites
    // Update isFavorite state accordingly
  };

  return (
    <Box p={2} sx={{ backgroundColor: darkMode ? "#333" : "#fff", minHeight: "100vh" }}>
      <TextField label="Search Movie" variant="outlined" fullWidth value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <Button variant="contained" onClick={handleSearch} sx={{ marginTop: 2 }}>
        Search
      </Button>
      <MovieDetails movie={currentMovie} isFavorite={isFavorite} onToggleFavorite={handleToggleFavorite} />
    </Box>
  );
};

export default Home;
