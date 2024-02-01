import React from "react";

import { Grid, Typography, Box } from "@mui/material";

import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/Slices/favoritesSlice";
import NoFavoritesBox from "../partials/NoFavoritesBox";
import FavoriteCard from "../partials/FavoritesCard";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Box p={4}>
      <Typography variant="h1" color="white" mb={4} textAlign="center" fontFamily={"Bebas Neue , ariel"}>
        Favorites
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {favorites.length > 0 ? <FavoriteCard /> : <NoFavoritesBox />}
      </Grid>
    </Box>
  );
};

export default Favorites;
