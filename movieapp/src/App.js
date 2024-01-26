// /src/App.js
import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export const AppContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
