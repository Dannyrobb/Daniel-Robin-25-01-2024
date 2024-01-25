// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          Main
        </Button>
        <Button component={Link} to="/favorites" color="inherit">
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
