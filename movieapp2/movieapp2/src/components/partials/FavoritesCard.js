import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, IconButton, Collapse, Box, Typography } from "@mui/material";
import FavoriteStar from "./FavoriteStar";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { selectFavorites } from "../../redux/Slices/favoritesSlice";

import { Grid, Fade } from "@mui/material";
import { setInputValue } from "../../redux/Slices/inputSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavoriteCard = () => {
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

  return favorites.map((favorite, index) => (
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
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
          className="grow"
        >
          <CardMedia
            component="img"
            width="200px"
            height="450px"
            image={favorite.Poster != "N/A" ? favorite.Poster : "/images/film.jpg"}
            alt={favorite.Title}
            style={{ objectFit: "cover", cursor: "pointer" }}
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
                fontSize: "1.4rem",
                textAlign: "center",
                fontFamily: "Bebas Neue, Arial",
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
  ));
};

export default FavoriteCard;
