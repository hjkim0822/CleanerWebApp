import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";

import "./App.css";

// pages
import home from "./pages/Home";
import login from "./pages/Login";
import signup from "./pages/Signup";

// components
import NavBar from "./components/NavBar";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#eeeeee",
      dark: "#bcbcbc",
      contrastText: "#000",
    },
    secondary: {
      light: "#e2f1f8",
      main: "#b0bec5",
      dark: "#808e95",
      contrastText: "#000",
    },
  },
  spread: {
    form: {
      textAlign: "center",
    },
    pageTitle: {
      margin: "1px auto 1px auto",
    },
    textField: {
      margin: "10px auto 10px auto",
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              {/* without exact, its going to return all with app.com/, which is basically everything */}
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

// homepage button => logo
// Menu + User Info button => login signin | settings help language
// map

export default App;
