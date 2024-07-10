import React from "react";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import { ThemeProvider } from "./../util/theme";
import { ProfileProvider } from "../context/ProfileContext";

function App(props) {
  return (
    <ThemeProvider>
      <ProfileProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </ProfileProvider>
    </ThemeProvider>
  );
}

export default App;
