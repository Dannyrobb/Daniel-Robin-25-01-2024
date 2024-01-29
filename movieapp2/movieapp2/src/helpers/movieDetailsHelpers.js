import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteStar from "./FavoriteStar";
import { removeFavorite, addFavorite } from "../redux/Slices/favoritesSlice";
export const renderImage = (movieDetails) => {
  const { Poster, Title } = movieDetails;
  return (
    <>
      {Poster && Poster !== "N/A" ? (
        <img src={Poster} alt={Title} style={{ width: "100%", borderRadius: 8, maxWidth: "100%" }} />
      ) : (
        <Typography variant="body1" textAlign="center">
          No Image Available
        </Typography>
      )}
    </>
  );
};

export const renderTitleSection = (movieDetails, favoritesArray, dispatch) => {
  const { Title, Year, imdbID, Director, Genre, Runtime, Country, Language, Plot, Actors } = movieDetails;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {Title} ({Year})
        <FavoriteStar movieDetails={movieDetails} />
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Director: {Director !== "N/A" ? Director : "Not Available"}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Genre: {Genre !== "N/A" ? Genre : "Not Available"}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Runtime: {Runtime !== "N/A" ? Runtime : "Not Available"}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Country: {Country !== "N/A" ? Country : "Not Available"}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Language: {Language !== "N/A" ? Language : "Not Available"}
      </Typography>
      <Typography variant="h6" mt={2} mb={1}>
        Plot
      </Typography>
      <Typography variant="body1">{Plot !== "N/A" ? Plot : "Not Available"}</Typography>
      <Typography variant="h6" mt={2} mb={1}>
        Actors
      </Typography>
      <Typography variant="body1" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {Actors.split(", ").map((actor) => (
          <span key={actor} style={{ margin: "0 8px", cursor: "pointer" }}>
            <a
              href={`https://www.imdb.com/find?q=${actor}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {actor}
            </a>
          </span>
        ))}
      </Typography>
    </>
  );
};
