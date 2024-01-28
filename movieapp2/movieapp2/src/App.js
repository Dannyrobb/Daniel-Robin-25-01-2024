import "./App.css";
import MovieDetails from "./components/pages/MovieDetails";
import { Routes, Route } from "react-router-dom";
import Favorites from "./components/pages/Favorites";
import ResponsiveAppBar from "./components/common/ResponsiveAppBar";
import { Stack } from "@mui/material";
function App() {
  return (
    <>
      <Stack
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<MovieDetails />} />

          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Stack>
    </>
  );
}

export default App;
