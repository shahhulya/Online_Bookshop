import React from "react";
import classes from "../Footer/footer.module.css";
import AboutUs from "../AboutUs/AboutUs";

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
        <h3 onClick={AboutUs}>О нас</h3>
        <li>О компании</li>
        <li>Адреса и контакты магазинов</li>
        <li>Партнеры</li>
      </div>
    </div>
  );
}
