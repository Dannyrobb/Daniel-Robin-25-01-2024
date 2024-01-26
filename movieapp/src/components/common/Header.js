import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Switch } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { AppContext } from "../../App";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <IconButton color="inherit" component={Link} to="/">
          Home
        </IconButton>
        <IconButton color="inherit" component={Link} to="/favorites">
          Favorites
        </IconButton>
        <Switch color="default" checked={darkMode} onChange={toggleDarkMode} icon={<Brightness4Icon />} checkedIcon={<Brightness7Icon />} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
