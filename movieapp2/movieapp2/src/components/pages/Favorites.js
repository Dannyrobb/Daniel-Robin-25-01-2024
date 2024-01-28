import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia, Grid, IconButton, Fade } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, selectFavorites } from "../../redux/Slices/favoritesSlice";
import { setInputValue } from "../../redux/Slices/inputSlice";
import { useNavigate } from "react-router-dom";
const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const navigate = useNavigate();
  return (
    <Box p={4}>
      <Typography variant="h1" mb={4}>
        Favorites
      </Typography>
      <Grid container spacing={2}>
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => (
            <Fade key={favorite.imdbID} in={true} timeout={(index + 1) * 800}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card elevation={3} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <CardMedia component="img" height="300" image={favorite.Poster} alt={favorite.Title} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      onClick={() => {
                        dispatch(setInputValue(favorite));
                        navigate("/");
                      }}
                    >
                      {favorite.Title} ({favorite.Year})
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {favorite.Plot}
                    </Typography>
                    <Box sx={{ marginTop: "auto" }}>
                      <IconButton
                        onClick={() => dispatch(removeFavorite(favorite.imdbID))}
                        color="primary"
                        aria-label="Remove from favorites"
                      >
                        <StarIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Fade>
          ))
        ) : (
          <Typography variant="subtitle1">No favorites yet...</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Favorites;
