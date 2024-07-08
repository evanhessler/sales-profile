import React from "react";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import { ThemeProvider } from "./../util/theme";
import { GameProvider } from "../context/GameContext";

function App(props) {
  return (
    <ThemeProvider>
      <GameProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </GameProvider>
    </ThemeProvider>
  );
}

export default App;
