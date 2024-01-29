import "./App.css";
import { useEffect } from "react";
import MovieDetails from "./components/pages/MovieDetails";
import { Routes, Route } from "react-router-dom";
import Favorites from "./components/pages/Favorites";
import ResponsiveAppBar from "./components/common/ResponsiveAppBar";
import { useDispatch } from "react-redux";
import { Stack } from "@mui/material";
function App() {
  const dispatch = useDispatch();

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
