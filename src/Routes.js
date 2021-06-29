import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddressPage from "./Views/AddressPage/index";
import Register from "./components/Auth/Register/register";
import Login from "./components/Auth/Login/login";
import Logout from "./components/Auth/Logout/logout";
// import AboutUs from "./components/AboutUs/AboutUs.js";
import AboutUsPage from "./Views/AboutUsPage/index.js";

import MainPage from "./Views/MainPage.js";
import ProductDetailPage from "./Views/ProductDetailPage/index.js";
import ProductCreatePage from "./Views/ProductCreatePage/ProductCreatePage";
import CategoryPage from "./Views/CategoryPage";
import LogInPage from "./Views/LogInPage";

export default function Routes() {
  return (
    <Router>
      {/* <AuthProvider> */}
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={LogInPage} exact />
        <Route path="/logout" component={Logout} exact />
        <Route exact path="/products/create" component={ProductCreatePage} />
        <Route exact path="/products/:id" component={ProductDetailPage} />
        <Route exact path="/category/:id" component={CategoryPage} />
        <Route exact path="/AboutUsPage" component={AboutUsPage} />
        <Route exact path="/AddressPage" component={AddressPage} />
      </Switch>

      {/* </AuthProvider> */}
    </Router>
  );
}
