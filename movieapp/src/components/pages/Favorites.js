import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Typography, Button, Card, CardContent } from "@material-ui/core";

const Favorites = () => {
  const history = useHistory();
  const favorites = useSelector((state) => state.favorites);

  const handleFavoriteDetails = (movie) => {
    history.push("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h5">Favorites</Typography>
      {favorites.map((movie) => (
        <Card key={movie.id} style={{ marginTop: "10px" }}>
          <CardContent>
            <Typography>{movie.title}</Typography>
            <Typography>Director: {movie.director}</Typography>
            <Typography>Release Year: {movie.releaseYear}</Typography>
            <Button variant="contained" onClick={() => handleFavoriteDetails(movie)} style={{ marginTop: "10px" }}>
              View Details
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Favorites;
