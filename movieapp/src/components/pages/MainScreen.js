// MainScreen.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie, addToFavorites, removeFromFavorites } from "./actions";
import { Container, TextField, Button, Typography, Card, CardContent } from "@mui/material";

function MainScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movieDetails);
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(searchMovie("Matrix"));
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(searchMovie(searchTerm));
  };

  const handleToggleFavorite = () => {
    const isFavorite = favorites.some((fav) => fav.id === movieDetails.id);
    if (isFavorite) {
      dispatch(removeFromFavorites(movieDetails.id));
    } else {
      dispatch(addToFavorites(movieDetails));
    }
  };

  return (
    <Container>
      <TextField label="Search Movie" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      <Card>
        <CardContent>
          <Typography variant="h5">{movieDetails.title}</Typography>
          <Typography>Actors: {movieDetails.actors}</Typography>
          <Typography>Release Date: {movieDetails.releaseDate}</Typography>
          <Typography>Director: {movieDetails.director}</Typography>
          <Typography>Producer: {movieDetails.producer}</Typography>
          <Button variant="contained" onClick={handleToggleFavorite}>
            {favorites.some((fav) => fav.id === movieDetails.id) ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default MainScreen;
