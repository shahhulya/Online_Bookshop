import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AboutUs from "./components/AboutUs/AboutUs.js";
import AboutUsPage from "./Views/AboutUsPage/index.js";
import MainPage from "./Views/MainPage.js";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/AboutUsPage" component={AboutUsPage} />
      </Switch>
    </Router>
  );
}
