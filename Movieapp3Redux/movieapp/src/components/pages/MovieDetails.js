import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import { setMovieDetails } from "../../redux/actions";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.movieDetails);
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    setFadeKey((prevKey) => prevKey + 1);
  }, [details]);

  if (!details) {
    return <h1>lol</h1>;
  }

  const { Actors, Country, Director, Genre, Language, Plot, Poster, Title, Runtime, Year, imdbID } = details;

  return (
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
              <Typography variant="body1">{Actors}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    </Box>
  );
};

export default MovieDetails;
