import React from "react";
import { Box, Typography, Button } from "@mui/material";

const MovieDetails = ({ movie, isFavorite, onToggleFavorite }) => {
  return (
    <Box mt={2} p={2} border={1} borderColor="primary.main">
      {movie && Object.keys(movie).length > 0 ? (
        <>
          <Typography variant="h4">{movie.Title}</Typography>
          <Typography>{`Actors: ${movie.Actors}`}</Typography>
          <Typography>{`Director: ${movie.Director}`}</Typography>
          <Typography>{`Producer: ${movie.Producer}`}</Typography>
          <Typography>{`Release Date: ${movie.Released}`}</Typography>
          <Button variant="contained" onClick={onToggleFavorite} sx={{ marginTop: 2 }}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </Button>
        </>
      ) : (
        <Typography>No movie details available.</Typography>
      )}
    </Box>
  );
};

export default MovieDetails;
