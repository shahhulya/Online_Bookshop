import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./Views/ManePage.js";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}
