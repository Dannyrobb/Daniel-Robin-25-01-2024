// src/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";
import Search from "./components/Search";
import MovieDetails from "./components/pages/MovieDetails";
import getMovieDetails from "./api/movieDetails";
import { setInput, setMovieDetails } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const movieDetails = useSelector((state) => state.movieDetails);

  const movieDetailsHandler = async () => {
    const data = await getMovieDetails(input.imdbID);
    dispatch(setMovieDetails(data));
  };

  useEffect(() => {
    if (typeof input === "object") {
      movieDetailsHandler();
    }
  }, [input]);

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Search />
      <MovieDetails />
    </Stack>
  );
}

export default App;
