import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import { CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectMovieDetails, selectLoading } from "../../redux/Slices/movieSlice";
import { selectInputValue } from "../../redux/Slices/inputSlice";
import Search from "../partials/Search";
import ImdbRating from "../partials/ImdbRating";
import { selectFavorites } from "../../redux/Slices/favoritesSlice";
import { renderImage, renderTitleSection, RenderDefault } from "../../helpers/movieDetailsHelpers";

const MovieDetails = () => {
  const [fadeKey, setFadeKey] = useState(0);
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);
  const loading = useSelector(selectLoading);
  const inputValue = useSelector(selectInputValue);
  const favoritesArray = useSelector(selectFavorites);

  useEffect(() => {
    if (!inputValue.Error) {
      dispatch(fetchMovieDetails(inputValue.imdbID));
    }
  }, [inputValue, dispatch]);

  useEffect(() => {
    setFadeKey((prevKey) => prevKey + 1);
  }, [movieDetails]);

  return (
    <>
      {typeof movieDetails === "string" ? (
        <>
          <Fade key={fadeKey} in={true} timeout={{ enter: 1000, exit: 0 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Search />
            </div>
          </Fade>
          <RenderDefault />
        </>
      ) : (
        <>
          {inputValue.imdbID ? (
            <Search />
          ) : (
            <Fade key={fadeKey} in={true} timeout={{ enter: 1000, exit: 0 }}>
              <div style={{ position: "relative", height: "100%" }}>
                <Search />
              </div>
            </Fade>
          )}

          {loading ? (
            <CircularProgress />
          ) : (
            inputValue &&
            inputValue.imdbID && (
              <Box mt={2} mx="auto" maxWidth={{ xs: "100%", md: "800px", lg: "900px" }}>
                <Fade key={fadeKey} in={true} timeout={1000}>
                  <Paper
                    elevation={3}
                    sx={{
                      padding: 2,
                      borderRadius: 5,

                      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",

                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      opacity: 0.5,
                    }}
                  >
                    <Grid container spacing={{ sm: 1, md: 11 }} justifyContent={"center"}>
                      <Grid item xs={12} md={6}>
                        {renderImage(movieDetails)}
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          {movieDetails.Ratings.length > 0 ? (
                            <ImdbRating ratingValue={movieDetails.Ratings[0].Value} />
                          ) : (
                            <Typography variant="h5" color={"white"}>
                              SECRET FILM! NO RATINGS SO FAR
                            </Typography>
                          )}
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
                        {renderTitleSection(movieDetails, favoritesArray, dispatch)}
                      </Grid>
                    </Grid>
                  </Paper>
                </Fade>
              </Box>
            )
          )}
        </>
      )}
    </>
  );
};

export default MovieDetails;
