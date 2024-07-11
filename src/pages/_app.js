import React from "react";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import { ThemeProvider } from "./../util/theme";
import { ProfileProvider } from "../context/ProfileContext";
import { QueryClientProvider } from "./../util/db";

function App(props) {
  return (
    <QueryClientProvider>
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
    </QueryClientProvider>
  );
}

export default App;
