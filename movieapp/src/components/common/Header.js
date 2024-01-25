import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Main
        </Button>
        <Button color="inherit" component={Link} to="/favorites">
          Favorites
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
