import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Stack, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectMovieDetails, selectLoading } from "../../redux/Slices/movieSlice";
import { setInputValue, selectInputValue } from "../../redux/Slices/inputSlice";
import Search from "../Search";
import { addFavorite, removeFavorite, selectFavorites } from "../../redux/Slices/favoritesSlice";
const MovieDetails = ({}) => {
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

  if (!movieDetails) {
    return <></>;
  }
  console.log(inputValue);
  console.log(movieDetails);
  const { Actors, Country, Director, Genre, Language, Plot, Poster, Title, Runtime, Year, imdbID } = movieDetails;

  return (
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
          <Box mt={4} mx="auto" maxWidth="800px">
            <Fade key={fadeKey} in={true} timeout={1000}>
              <Paper elevation={3} sx={{ padding: 2, borderRadius: 12, boxShadow: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <img src={Poster} alt={Title} style={{ width: "100%", borderRadius: 8 }} />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h4" gutterBottom>
                      {Title} ({Year})
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Director: {Director}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Genre: {Genre}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Runtime: {Runtime}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Country: {Country}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Language: {Language}
                    </Typography>
                    <Typography variant="h6" mt={2} mb={1}>
                      Plot
                    </Typography>
                    <Typography variant="body1">{Plot}</Typography>
                    <Typography variant="h6" mt={2} mb={1}>
                      Actors
                    </Typography>

                    {favoritesArray.some((favorite) => favorite.imdbID === movieDetails.imdbID) ? (
                      <StarIcon onClick={() => dispatch(removeFavorite(movieDetails.imdbID))} />
                    ) : (
                      <StarBorderIcon onClick={() => dispatch(addFavorite(movieDetails))} />
                    )}

                    <Typography variant="body1">{Actors}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Fade>
          </Box>
        )
      )}
    </>
  );
};

export default MovieDetails;
