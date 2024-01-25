// src/pages/Home.js
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store/actions";
import { searchMovie, setCurrentMovie } from "../store/actions";
import { DarkModeContext } from "../utils/helpers";
import { Button, TextField, Typography, Card, CardContent } from "@material-ui/core";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { darkMode } = useContext(DarkModeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const currentMovie = useSelector((state) => state.currentMovie);

  const handleSearch = () => {
    dispatch(searchMovie(searchTerm));
  };

  const handleToggleFavorite = () => {
    if (currentMovie.isFavorite) {
      dispatch(removeFromFavorites(currentMovie.id));
    } else {
      dispatch(addToFavorites(currentMovie));
    }
  };

  const handleMovieDetails = () => {
    dispatch(setCurrentMovie(currentMovie));
    history.push("/movie-details");
  };

  return (
    <div style={{ padding: "20px" }}>
      <TextField label="Search Movie" variant="outlined" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </Button>

      {currentMovie && (
        <Card style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h5">{currentMovie.title}</Typography>
            <Typography>Director: {currentMovie.director}</Typography>
            <Typography>Release Year: {currentMovie.releaseYear}</Typography>
            <Button
              variant="contained"
              color={currentMovie.isFavorite ? "secondary" : "primary"}
              onClick={handleToggleFavorite}
              style={{ marginTop: "10px", marginRight: "10px" }}
            >
              {currentMovie.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </Button>
            <Button variant="contained" onClick={handleMovieDetails} style={{ marginTop: "10px" }}>
              View Details
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Home;
