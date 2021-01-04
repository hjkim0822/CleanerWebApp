import React from "react";
import { Link } from "react-router-dom";
// import {BrowserRouter, Switch, Route} from 'react-router-dom';

// MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

export default function NavBar() {
  return (
    <AppBar>
      <Toolbar className="nav-container">
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Signup
        </Button>
        {/* button is higher level component, meaning you can pass child component to Button */}
      </Toolbar>
    </AppBar>
  );
}
