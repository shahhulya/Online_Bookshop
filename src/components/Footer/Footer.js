import React from "react";
import classes from "../Footer/footer.module.css";
// import AboutUsPage from "../../Views/AboutUsPage";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.footer_section}>
        <h3>Разделы</h3>
        <li>Романы</li>
        <li>Драмы</li>
        <li>Обзоры</li>
      </div>
      <div>
        <Link to="/AboutUsPage">
          <h3> О нас</h3>
        </Link>

        <li>О компании</li>
        <li>Адреса и контакты магазинов</li>
        <li>Партнеры</li>
      </div>
    </div>
  );
}
