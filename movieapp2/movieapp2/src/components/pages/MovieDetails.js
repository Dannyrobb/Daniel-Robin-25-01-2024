// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Fade from "@mui/material/Fade";
// import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
// import { CircularProgress, IconButton } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMovieDetails, selectMovieDetails, selectLoading } from "../../redux/Slices/movieSlice";
// import { setInputValue, selectInputValue } from "../../redux/Slices/inputSlice";
// import Search from "../Search";
// import { addFavorite, removeFavorite, selectFavorites } from "../../redux/Slices/favoritesSlice";
// import SkeletonSearch from "../partials/SkeletonSearch";
// const MovieDetails = () => {
//   const [fadeKey, setFadeKey] = useState(0);
//   const dispatch = useDispatch();
//   const movieDetails = useSelector(selectMovieDetails);
//   const loading = useSelector(selectLoading);
//   const inputValue = useSelector(selectInputValue);
//   const favoritesArray = useSelector(selectFavorites);

//   useEffect(() => {
//     if (!inputValue.Error) {
//       dispatch(fetchMovieDetails(inputValue.imdbID));
//     }
//   }, [inputValue, dispatch]);

//   useEffect(() => {
//     setFadeKey((prevKey) => prevKey + 1);
//   }, [movieDetails]);

//   return (
//     <>
//       {typeof movieDetails == "string" ? (
//         <>
//           <Fade key={fadeKey} in={true} timeout={{ enter: 1000, exit: 0 }}>
//             <div style={{ position: "relative", height: "100%" }}>
//               <Search />
//             </div>
//           </Fade>

//           <h2>Welcome...Start searching to search!</h2>
//         </>
//       ) : (
//         <>
//           {inputValue.imdbID ? (
//             <Search />
//           ) : (
//             <Fade key={fadeKey} in={true} timeout={{ enter: 1000, exit: 0 }}>
//               <div style={{ position: "relative", height: "100%" }}>
//                 <Search />
//               </div>
//             </Fade>
//           )}

//           {loading ? (
//             <CircularProgress />
//           ) : (
//             inputValue &&
//             inputValue.imdbID && (
//               <Box mt={2} mx="auto" maxWidth={{ xs: "100%", md: "800px", lg: "900px" }}>
//                 <Fade key={fadeKey} in={true} timeout={1000}>
//                   <Paper elevation={3} sx={{ padding: 2, borderRadius: 12, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}>
//                     <Grid container spacing={4}>
//                       <Grid item xs={12} md={movieDetails.Poster && movieDetails.Poster !== "N/A" ? 6 : 12}>
//                         {movieDetails.Poster && movieDetails.Poster !== "N/A" ? (
//                           <img
//                             src={movieDetails.Poster}
//                             alt={movieDetails.Title}
//                             style={{ width: "100%", borderRadius: 8, maxWidth: "100%" }}
//                           />
//                         ) : (
//                           <Typography variant="body1" textAlign="center">
//                             No Image Available
//                           </Typography>
//                         )}
//                       </Grid>
//                       <Grid
//                         item
//                         xs={12}
//                         md={movieDetails.Poster && movieDetails.Poster !== "N/A" ? 6 : 12}
//                         sx={{
//                           position: "relative",
//                           display: "flex",
//                           flexDirection: "column",
//                           justifyContent: "space-evenly",
//                         }}
//                       >
//                         <Typography variant="h4" gutterBottom>
//                           {movieDetails.Title} ({movieDetails.Year})
//                           <IconButton
//                             sx={{
//                               marginLeft: 1,
//                               color: favoritesArray.some((favorite) => favorite.imdbID === movieDetails.imdbID) ? "gold" : "inherit",
//                             }}
//                             onClick={() => {
//                               favoritesArray.some((favorite) => favorite.imdbID === movieDetails.imdbID)
//                                 ? dispatch(removeFavorite(movieDetails.imdbID))
//                                 : dispatch(addFavorite(movieDetails));
//                             }}
//                           >
//                             {favoritesArray.some((favorite) => favorite.imdbID === movieDetails.imdbID) ? <StarIcon /> : <StarBorderIcon />}
//                           </IconButton>
//                         </Typography>
//                         <Typography variant="subtitle1" gutterBottom>
//                           Director: {movieDetails.Director !== "N/A" ? movieDetails.Director : "Not Available"}
//                         </Typography>
//                         <Typography variant="subtitle1" gutterBottom>
//                           Genre: {movieDetails.Genre !== "N/A" ? movieDetails.Genre : "Not Available"}
//                         </Typography>
//                         <Typography variant="subtitle1" gutterBottom>
//                           Runtime: {movieDetails.Runtime !== "N/A" ? movieDetails.Runtime : "Not Available"}
//                         </Typography>
//                         <Typography variant="subtitle1" gutterBottom>
//                           Country: {movieDetails.Country !== "N/A" ? movieDetails.Country : "Not Available"}
//                         </Typography>
//                         <Typography variant="subtitle1" gutterBottom>
//                           Language: {movieDetails.Language !== "N/A" ? movieDetails.Language : "Not Available"}
//                         </Typography>
//                         <Typography variant="h6" mt={2} mb={1}>
//                           Plot
//                         </Typography>
//                         <Typography variant="body1">{movieDetails.Plot !== "N/A" ? movieDetails.Plot : "Not Available"}</Typography>
//                         <Typography variant="h6" mt={2} mb={1}>
//                           Actors
//                         </Typography>
//                         <Typography variant="body1" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
//                           {movieDetails.Actors.split(", ").map((actor) => {
//                             return (
//                               <span key={actor} style={{ margin: "0 8px", cursor: "pointer" }}>
//                                 <a
//                                   href={`https://www.imdb.com/find?q=${actor}`}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   style={{ textDecoration: "none", color: "inherit" }}
//                                 >
//                                   {actor}
//                                 </a>
//                               </span>
//                             );
//                           })}
//                         </Typography>
//                       </Grid>
//                     </Grid>
//                   </Paper>
//                 </Fade>
//               </Box>
//             )
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default MovieDetails;
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectMovieDetails, selectLoading } from "../../redux/Slices/movieSlice";
import { setInputValue, selectInputValue } from "../../redux/Slices/inputSlice";
import Search from "../Search";
import { addFavorite, removeFavorite, selectFavorites } from "../../redux/Slices/favoritesSlice";
import { renderImage, renderTitleSection } from "../../helpers/movieDetailsHelpers";

const MovieDetails = () => {
  const [fadeKey, setFadeKey] = useState(0);
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieDetails);
  const loading = useSelector(selectLoading);
  const inputValue = useSelector(selectInputValue);
  const favoritesArray = useSelector(selectFavorites);

  useEffect(() => {
    if (!inputValue.Error) {
      dispatch(fetchMovieDetails(inputValue.imdbID));
    }
  }, [inputValue, dispatch]);

  useEffect(() => {
    setFadeKey((prevKey) => prevKey + 1);
  }, [movieDetails]);

  return (
    <>
      {typeof movieDetails === "string" ? (
        <>
          <Fade key={fadeKey} in={true} timeout={{ enter: 1000, exit: 0 }}>
            <div style={{ position: "relative", height: "100%" }}>
              <Search />
            </div>
          </Fade>
          <h2>Welcome...Start searching to search!</h2>
        </>
      ) : (
        <>
          {inputValue.imdbID ? (
            <Search />
          ) : (
            <Fade key={fadeKey} in={true} timeout={{ enter: 1000, exit: 0 }}>
              <div style={{ position: "relative", height: "100%" }}>
                <Search />
              </div>
            </Fade>
          )}

          {loading ? (
            <CircularProgress />
          ) : (
            inputValue &&
            inputValue.imdbID && (
              <Box mt={2} mx="auto" maxWidth={{ xs: "100%", md: "800px", lg: "900px" }}>
                <Fade key={fadeKey} in={true} timeout={1000}>
                  <Paper elevation={3} sx={{ padding: 2, borderRadius: 12, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={movieDetails.Poster && movieDetails.Poster !== "N/A" ? 6 : 12}>
                        {renderImage(movieDetails)}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={movieDetails.Poster && movieDetails.Poster !== "N/A" ? 6 : 12}
                        sx={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {renderTitleSection(movieDetails, favoritesArray, dispatch)}
                      </Grid>
                    </Grid>
                  </Paper>
                </Fade>
              </Box>
            )
          )}
        </>
      )}
    </>
  );
};

export default MovieDetails;
