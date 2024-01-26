import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import MovieDetails from "./components/pages/MovieDetails";
import getMovieDetails from "./api/movieDetails";
import { useState, useEffect } from "react";
import { Stack } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const [movieDetails, setMovieDetails] = useState("");

  const movieDetailsHandler = async () => {
    const data = await getMovieDetails(input.imdbID);
    setMovieDetails(data);
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
      <Search setInput={setInput} input={input} />
      <MovieDetails data={input} details={movieDetails} input={input} />
    </Stack>
  );
}

export default App;
