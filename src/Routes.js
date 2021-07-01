<<<<<<< HEAD
=======

>>>>>>> 26dab25b1c9945571e2f10201516cb366a3b5a59
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddressPage from "./Views/AddressPage/index";
import Logout from "./components/Auth/Logout/logout";
import AboutUsPage from "./Views/AboutUsPage/index.js";
import MainPage from "./Views/MainPage.js";
import ProductDetailPage from "./Views/ProductDetailPage/index.js";
import CategoryPage from "./Views/CategoryPage";
import LogInPage from "./Views/LogInPage";
import ItemsSlider from "./components/ItemsSlider";
import ProductUpdatePage from "./Views/ProductUpdatePage";
import ProductCreatePage from "./Views/ProductCreatePage/index";
import SearchResultPage from "./Views/SearchResultPage/SearchResultPage";
// import RegisterPage from "./Views/RegisterPage/index";
import RegisterPage from "./Views/RegisterPage";
import AccountPage from "./Views/AccountPage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/account" component={AccountPage} />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/login" component={LogInPage} exact />
        <Route path="/logout" component={Logout} exact />
        <Route exact path="/products/create" component={ProductCreatePage} />
        <Route exact path="/products/:id" component={ProductDetailPage} />
        <Route
          path="/products/:id/update/"
          component={ProductUpdatePage}
          exact
        />
        <Route exact path="/category/:name" component={CategoryPage} />
        <Route exact path="/AboutUsPage" component={AboutUsPage} />
        <Route exact path="/AddressPage" component={AddressPage} />
        <Route
          path="/products/search/:searchValue"
          component={SearchResultPage}
          exact
        />
      </Switch>

      {/* </AuthProvider> */}
    </Router>
  );
}
