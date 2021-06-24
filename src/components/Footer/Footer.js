import React from "react";
import classes from "../Footer/footer.module.css";
// import AboutUsPage from "../../Views/AboutUsPage";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.footer_section}>
        <h3 style={{ color: "crimson" }}>Разделы</h3>
        <li>Романы</li>
        <li>Драмы</li>
        <li>Обзоры</li>
      </div>
      <div>
        <h3 style={{ color: "crimson" }}> О нас</h3>
        <Link to="/AboutUsPage">
          <li style={{ color: "white" }}>О компании</li>
        </Link>

        <li>Адреса и контакты магазинов</li>
        <li>Партнеры</li>
      </div>
    </div>
  );
}
