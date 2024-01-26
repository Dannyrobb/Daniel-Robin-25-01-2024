// /src/pages/Favorites.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Favorites = () => {
  // Fetch and display favorites based on your storage logic
  const favorites = [];

  return (
    <Box p={2}>
      <Typography variant="h4">Favorites</Typography>
      {favorites.length > 0 ? (
        favorites.map((favorite) => (
          <Box key={favorite.id} mt={2} p={2} border={1} borderColor="primary.main">
            <Typography variant="h6">{favorite.title}</Typography>
            <Typography>{`Director: ${favorite.director}, Release Year: ${favorite.releaseYear}`}</Typography>
            {/* Add other details as needed */}
          </Box>
        ))
      ) : (
        <Typography>No favorites yet.</Typography>
      )}
    </Box>
  );
};

export default Favorites;
