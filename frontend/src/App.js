import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "./App.css";

// pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

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
