import React from "react";
import { useSelector } from "react-redux";
import { Typography, Card, CardContent } from "@material-ui/core";

const MovieDetails = () => {
  const currentMovie = useSelector((state) => state.currentMovie);

  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4">{currentMovie.title}</Typography>
          <Typography>Director: {currentMovie.director}</Typography>
          <Typography>Producer: {currentMovie.producer}</Typography>
          <Typography>Actors: {currentMovie.actors.join(", ")}</Typography>
          <Typography>Release Date: {currentMovie.releaseDate}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieDetails;
