// import React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { Card, CardContent, CardMedia, Grid, IconButton, Fade } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFavorite, selectFavorites } from "../../redux/Slices/favoritesSlice";
// import { setInputValue } from "../../redux/Slices/inputSlice";
// import { useNavigate } from "react-router-dom";
// const Favorites = () => {
//   const dispatch = useDispatch();
//   const favorites = useSelector(selectFavorites);
//   const navigate = useNavigate();
//   return (
//     <Box p={4}>
//       <Typography variant="h1" mb={4}>
//         Favorites
//       </Typography>
//       <Grid container spacing={2}>
//         {favorites.length > 0 ? (
//           favorites.map((favorite, index) => (
//             <Fade key={favorite.imdbID} in={true} timeout={(index + 1) * 800}>
//               <Grid item xs={12} sm={6} md={4} lg={3}>
//                 <Card elevation={3} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
//                   <CardMedia component="img" height="300" image={favorite.Poster} alt={favorite.Title} />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography
//                       variant="h6"
//                       gutterBottom
//                       onClick={() => {
//                         dispatch(setInputValue(favorite));
//                         navigate("/");
//                       }}
//                     >
//                       {favorite.Title} ({favorite.Year})
//                     </Typography>
//                     <Typography variant="subtitle1" paragraph>
//                       {favorite.Plot}
//                     </Typography>
//                     <Box sx={{ marginTop: "auto" }}>
//                       <IconButton
//                         onClick={() => dispatch(removeFavorite(favorite.imdbID))}
//                         color="primary"
//                         aria-label="Remove from favorites"
//                       >
//                         <StarIcon />
//                       </IconButton>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Fade>
//           ))
//         ) : (
//           <Typography variant="subtitle1">No favorites yet...</Typography>
//         )}
//       </Grid>
//     </Box>
//   );
// };

// export default Favorites;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, CardContent, CardMedia, Grid, IconButton, Collapse, Fade } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, selectFavorites } from "../../redux/Slices/favoritesSlice";
import { setInputValue } from "../../redux/Slices/inputSlice";
import { useNavigate } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState(null);

  const handleDescriptionClick = (favorite) => {
    dispatch(setInputValue(favorite));
    navigate("/");
  };

  const handleExpandClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Box p={4}>
      <Typography variant="h1" mb={4}>
        Favorites
      </Typography>
      <Grid container spacing={2}>
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => (
            <Fade key={favorite.imdbID} in={true} timeout={(index + 1) * 400}>
              <Grid item xs={12} sm={6} md={4} lg={3} key={favorite.imdbID}>
                <Card
                  elevation={3}
                  sx={{
                    height: expandedCard === index ? "100%" : "auto",
                    overflow: "hidden",
                    transition: "height 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia component="img" height="300" image={favorite.Poster} alt={favorite.Title} style={{ objectFit: "cover" }} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom onClick={() => handleDescriptionClick(favorite)} style={{ cursor: "pointer" }}>
                      {favorite.Title} ({favorite.Year})
                    </Typography>
                    <Collapse in={expandedCard === index}>
                      <Typography variant="subtitle1" paragraph>
                        {favorite.Plot}
                      </Typography>
                    </Collapse>
                    <Box sx={{ marginTop: "auto" }}>
                      <IconButton
                        onClick={() => dispatch(removeFavorite(favorite.imdbID))}
                        color="primary"
                        aria-label="Remove from favorites"
                        sx={{ alignSelf: "flex-end" }}
                      >
                        <StarIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleExpandClick(index)}
                        color="primary"
                        aria-label="Expand description"
                        sx={{ alignSelf: "flex-end", marginTop: "-4px" }}
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
