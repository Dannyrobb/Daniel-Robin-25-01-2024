import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Typography from "@mui/material/Typography";
import { Box, Paper, Grid, Fade } from "@mui/material";

import FavoriteStar from "../components/partials/FavoriteStar";
import ImdbRating from "../components/partials/ImdbRating";

import defaultMovie from "../assets/defaultData.json";

export const renderImage = (movieDetails) => {
  const { Title } = movieDetails;
  return (
    <>
      <img
        src={movieDetails.Poster && movieDetails.Poster !== "N/A" ? movieDetails.Poster : "/images/film.jpg"}
        alt={Title}
        style={{ width: "100%", borderRadius: 8, maxWidth: "100%" }}
      />
    </>
  );
};

export const renderTitleSection = (movieDetails) => {
  const { Title, Year, Director, Genre, Runtime, Country, Language, Plot, Actors } = movieDetails;
  return (
    <>
      <Typography color="white" variant="h3" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        {Title} ({Year})
        <FavoriteStar movieDetails={movieDetails} />
      </Typography>

      <Typography color="white" variant="h4" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        {Director.split(",").length > 1 ? "Directors" : "Director"}
      </Typography>
      <Typography color="white" variant="subtitle1">
        {Director !== "N/A" ? Director : "Not Available"}
      </Typography>

      <Typography color="white" variant="h4" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        Genre
      </Typography>
      <Typography color="white" variant="subtitle1">
        {Genre !== "N/A" ? Genre : "Not Available"}
      </Typography>

      <Typography color="white" variant="h4" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        Runtime
      </Typography>
      <Typography color="white" variant="subtitle1">
        {Runtime !== "N/A" ? Runtime : "Not Available"}
      </Typography>

      <Typography color="white" variant="h4" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        Country
      </Typography>
      <Typography color="white" variant="subtitle1">
        {Country !== "N/A" ? Country : "Not Available"}
      </Typography>

      <Typography color="white" variant="h4" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        Language
      </Typography>
      <Typography color="white" variant="subtitle1">
        {Language !== "N/A" ? Language : "Not Available"}
      </Typography>

      <Typography color="white" sx={{ fontFamily: "Bebas Neue, Arial" }} variant="h4">
        Plot
      </Typography>
      <Typography color="white" variant="body1">
        {Plot !== "N/A" ? Plot : "Not Available"}
      </Typography>
      <Typography color="white" variant="h4">
        Actors
      </Typography>
      <Typography color="white" variant="body1" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
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

export const RenderDefault = ({ favoritesArray }) => {
  const dispatch = useDispatch();
  const [fadeKey, setFadeKey] = useState(0);
  useEffect(() => {
    setFadeKey((prevKey) => prevKey + 1);
  }, [defaultMovie]);
  return (
    <Box mt={2} mx="auto" maxWidth={{ xs: "100%", md: "800px", lg: "900px" }}>
      <Fade key={fadeKey} in={true} timeout={1000}>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            borderRadius: 5,
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Grid container spacing={{ sm: 1, md: 11 }} justifyContent={"center"}>
            <Grid item xs={12} md={6}>
              {renderImage(defaultMovie)}
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <ImdbRating ratingValue={defaultMovie.Ratings[0].Value} />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {renderTitleSection(defaultMovie, favoritesArray, dispatch)}
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    </Box>
  );
};
