// FavoritesScreen.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Typography, Card, CardContent } from "@mui/material";

function FavoritesScreen() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Container>
      <Typography variant="h4">Favorites</Typography>
      {favorites.map((fav) => (
        <Card key={fav.id}>
          <CardContent>
            <Link to={`/movie/${fav.id}`}>
              <Typography variant="h6">Name: {fav.title}</Typography>
              <Typography>Director: {fav.director}</Typography>
              <Typography>Release Year: {fav.releaseDate}</Typography>
            </Link>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default FavoritesScreen;
