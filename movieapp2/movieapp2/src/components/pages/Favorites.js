import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia, Grid, IconButton, Collapse, Fade } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/Slices/favoritesSlice";
import { setInputValue } from "../../redux/Slices/inputSlice";
import { useNavigate } from "react-router-dom";
import FavoriteStar from "../../helpers/FavoriteStar";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const handleRedirectOnClick = (favorite) => {
    dispatch(setInputValue(favorite));
    navigate("/");
  };

  const handleExpandClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Box p={4}>
      <Typography variant="h1" color="white" mb={4} textAlign="center" fontFamily={"Bebas Neue , ariel"}>
        Favorites
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => (
            <Fade key={favorite.imdbID} in={true} timeout={(index + 1) * 400}>
              <Grid item xs={12} sm={6} md={4} lg={3} key={favorite.imdbID}>
                <Card
                  elevation={3}
                  sx={{
                    height: expandedCard === index ? "100%" : "auto",
                    m: 0.2,
                    overflow: "hidden",
                    transition: "height 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="grow"
                >
                  <CardMedia
                    component="img"
                    width="200px"
                    height="450px"
                    image={favorite.Poster != "N/A" ? favorite.Poster : "/movies/film.jpg"}
                    alt={favorite.Title}
                    style={{ objectFit: "cover" }}
                    onClick={() => handleRedirectOnClick(favorite)}
                  />
                  <CardContent sx={{ flexGrow: 1, backgroundColor: "transparent" }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      onClick={() => handleRedirectOnClick(favorite)}
                      style={{
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: "1rem",
                        textAlign: "center",
                      }}
                    >
                      {favorite.Title} ({favorite.Year})
                    </Typography>
                    <Collapse in={expandedCard === index}>
                      <Typography variant="subtitle1" paragraph>
                        {favorite.Plot}
                      </Typography>
                    </Collapse>
                    <Box sx={{ marginTop: "auto", display: "flex", justifyContent: "center" }}>
                      <FavoriteStar movieDetails={favorite} />
                      <IconButton
                        onClick={() => handleExpandClick(index)}
                        color="primary"
                        aria-label="Expand description"
                        sx={{ marginTop: "-4px" }}
                      >
                        {expandedCard === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
