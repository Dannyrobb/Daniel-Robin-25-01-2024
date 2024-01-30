import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

// Customized Rating component
const ImdbRating = ({ ratingValue }) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "yellow",
    },
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" sx={{ color: "white", fontFamily: "Bebas Neue, Arial" }}>
        imdb Rating
      </Typography>
      <StyledRating
        readOnly
        name="customized-movie-rating"
        value={parseFloat(ratingValue)} //
        max={10}
        precision={0.5}
      />
      <Typography variant="body1" sx={{ textAlign: "center", color: "white" }}>
        {` ${ratingValue}`}
      </Typography>
    </Box>
  );
};

export default ImdbRating;

// import React from "react";
// import { styled } from "@mui/system";
// import Box from "@mui/material/Box";
// import Rating from "@mui/material/Rating";
// import Typography from "@mui/material/Typography";

// // Customized Rating component
// const ImdbRating = ({ ratingValue }) => {
//   const StyledRating = styled(Rating)({
//     "& .MuiRating-iconFilled": {
//       color: "#ff6d75",
//     },
//     "& .MuiRating-iconHover": {
//       color: "#ff3d47",
//     },
//   });

//   const RatingBox = styled(Box)({
//     backgroundColor: "#f5f5f5",
//     padding: 2,
//     borderRadius: 8,
//     textAlign: "center",
//     marginTop: 2,
//   });

//   return (
//     <RatingBox>
//       <Typography component="legend">Movie Rating</Typography>
//       <StyledRating
//         name="customized-movie-rating"
//         value={parseFloat(ratingValue)} //
//         max={10}
//         precision={0.5}
//       />
//       <Typography variant="body1">{`Rating: ${ratingValue}/10`}</Typography>
//     </RatingBox>
//   );
// };

// export default ImdbRating;
