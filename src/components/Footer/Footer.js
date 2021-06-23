import React from "react";
import classes from "../Footer/footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.footer_section}>
        <h3>Разделы</h3>
        <li>Фильмы</li>
        <li>Сериалы</li>
        <li>Трейлеры</li>
      </div>
      <div>
        <h3>О нас</h3>
        <li>О компании</li>
        <li>Адреса и контакты магазинов</li>
        <li>Партнеры</li>
      </div>
    </div>
  );
}
