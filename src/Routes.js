import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddressPage from "./Views/AddressPage/index";

// import AboutUs from "./components/AboutUs/AboutUs.js";
import AboutUsPage from "./Views/AboutUsPage/index.js";

import MainPage from "./Views/MainPage.js";
import ProductDetailPage from "./Views/ProductDetailPage/index.js";
import ProductCreatePage from "./Views/ProductCreatePage/ProductCreatePage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products/create" component={ProductCreatePage} />
        <Route exact path="/products/:id" component={ProductDetailPage} />
        <Route exact path="/AboutUsPage" component={AboutUsPage} />
        <Route exact path="/AddressPage" component={AddressPage} />
      </Switch>
    </Router>
  );
}
