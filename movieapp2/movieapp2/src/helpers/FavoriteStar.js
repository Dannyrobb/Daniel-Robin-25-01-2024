import React from "react";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite, selectFavorites } from "../redux/Slices/favoritesSlice";

const FavoriteStar = ({ movieDetails }) => {
  const dispatch = useDispatch();
  const favoritesArray = useSelector(selectFavorites);

  const imdbID = movieDetails.imdbID;

  return (
    <IconButton
      sx={{
        marginLeft: 1,
        color: favoritesArray.some((favorite) => favorite.imdbID === imdbID) ? "gold" : "inherit",
      }}
      onClick={() => {
        favoritesArray.some((favorite) => favorite.imdbID === imdbID)
          ? dispatch(removeFavorite(imdbID))
          : dispatch(addFavorite(movieDetails));
      }}
    >
      {favoritesArray.some((favorite) => favorite.imdbID === imdbID) ? <StarIcon /> : <StarBorderIcon />}
    </IconButton>
  );
};

export default FavoriteStar;
