import React from "react";
import Typography from "@mui/material/Typography";
import FavoriteStar from "./FavoriteStar";
import defaultMovie from "../defaultData.json";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";

export const renderImage = (movieDetails) => {
  const { Title } = movieDetails;
  return (
    <>
      {movieDetails.Poster && movieDetails.Poster !== "N/A" ? (
        <img src={movieDetails.Poster} alt={Title} style={{ width: "100%", borderRadius: 8, maxWidth: "100%" }} />
      ) : (
        // <Typography variant="body1" textAlign="center">
        //   No Image Available
        // </Typography>
        <img src={"/movies/film.jpg"} alt={Title} style={{ width: "100%", borderRadius: 8, maxWidth: "100%" }} />
      )}
    </>
  );
};

export const renderTitleSection = (movieDetails, favoritesArray, dispatch) => {
  const { Title, Year, imdbID, Director, Genre, Runtime, Country, Language, Plot, Actors } = movieDetails;

  return (
    // <>
    //   <Typography color="white" variant="h4" gutterBottom>
    //     {Title} ({Year})
    //     <FavoriteStar movieDetails={movieDetails} />
    //   </Typography>

    //   <Typography color="white" variant="h5">
    //     Director
    //   </Typography>
    //   <Typography color="white" variant="subtitle1" gutterBottom>
    //     {Director !== "N/A" ? Director : "Not Available"}
    //   </Typography>

    //   <Typography color="white" variant="h5">
    //     Genre
    //   </Typography>
    //   <Typography color="white" variant="subtitle1" gutterBottom>
    //     {Genre !== "N/A" ? Genre : "Not Available"}
    //   </Typography>

    //   <Typography color="white" variant="h5">
    //     Runtime
    //   </Typography>
    //   <Typography color="white" variant="subtitle1" gutterBottom>
    //     {Runtime !== "N/A" ? Runtime : "Not Available"}
    //   </Typography>

    //   <Typography color="white" variant="h5" gutterBottom>
    //     Country
    //   </Typography>
    //   <Typography color="white" variant="subtitle1" gutterBottom>
    //     {Country !== "N/A" ? Country : "Not Available"}
    //   </Typography>

    //   <Typography color="white" variant="h5" gutterBottom>
    //     Language
    //   </Typography>
    //   <Typography color="white" variant="subtitle1" gutterBottom>
    //     {Language !== "N/A" ? Language : "Not Available"}
    //   </Typography>

    //   <Typography color="white" variant="h6" mt={2} mb={1}>
    //     Plot
    //   </Typography>
    //   <Typography color="white" variant="body1">
    //     {Plot !== "N/A" ? Plot : "Not Available"}
    //   </Typography>
    //   <Typography color="white" variant="h6" mt={2} mb={1}>
    //     Actors
    //   </Typography>
    //   <Typography color="white" variant="body1" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
    //     {Actors.split(", ").map((actor) => (
    //       <span key={actor} style={{ margin: "0 8px", cursor: "pointer" }}>
    //         <a
    //           href={`https://www.imdb.com/find?q=${actor}`}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           style={{ textDecoration: "none", color: "inherit" }}
    //         >
    //           {actor}
    //         </a>
    //       </span>
    //     ))}
    //   </Typography>
    // </>
    <>
      <Typography color="white" variant="h4" gutterBottom>
        {Title} ({Year})
        <FavoriteStar movieDetails={movieDetails} />
      </Typography>

      <Typography color="white" variant="h4" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        Director
      </Typography>
      <Typography color="white" variant="subtitle1" gutterBottom>
        {Director !== "N/A" ? Director : "Not Available"}
      </Typography>

      <Typography color="white" variant="h4" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        Genre
      </Typography>
      <Typography color="white" variant="subtitle1" gutterBottom>
        {Genre !== "N/A" ? Genre : "Not Available"}
      </Typography>

      <Typography color="white" variant="h4" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        Runtime
      </Typography>
      <Typography color="white" variant="subtitle1" gutterBottom>
        {Runtime !== "N/A" ? Runtime : "Not Available"}
      </Typography>

      <Typography color="white" variant="h4" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        Country
      </Typography>
      <Typography color="white" variant="subtitle1" gutterBottom>
        {Country !== "N/A" ? Country : "Not Available"}
      </Typography>

      <Typography color="white" variant="h4" sx={{ fontFamily: "Bebas Neue, Arial" }}>
        Language
      </Typography>
      <Typography color="white" variant="subtitle1" gutterBottom>
        {Language !== "N/A" ? Language : "Not Available"}
      </Typography>

      <Typography color="white" sx={{ fontFamily: "Bebas Neue, Arial" }} variant="h4" mb={1}>
        Plot
      </Typography>
      <Typography color="white" variant="body1">
        {Plot !== "N/A" ? Plot : "Not Available"}
      </Typography>
      <Typography color="white" variant="h6" mt={2} mb={1}>
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

  return (
    <Box mt={2} mx="auto" maxWidth={{ xs: "100%", md: "800px", lg: "900px" }}>
      {/* <Fade key={fadeKey} in={true} timeout={1000}> */}
      <Paper
        elevation={3}
        sx={{ padding: 2, borderRadius: 12, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)", backgroundColor: "transparent" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={defaultMovie.Poster && defaultMovie.Poster !== "N/A" ? 6 : 12}>
            {renderImage(defaultMovie)}
          </Grid>
          <Grid
            item
            xs={12}
            md={defaultMovie.Poster && defaultMovie.Poster !== "N/A" ? 6 : 12}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {renderTitleSection(defaultMovie, favoritesArray, dispatch)}
          </Grid>
        </Grid>
      </Paper>
      {/* </Fade> */}
    </Box>
  );
};
