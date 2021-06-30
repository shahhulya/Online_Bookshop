import React from "react";
import classes from "../FooterSocial/footerSocial.module.css";
import { Link } from "react-router-dom";

export default function FooterSocial() {
  return (
    <div className={classes.wrapper}>
      <Link className={classes.link} to="/AddressPage">
        <h3>Наш адрес: пр. Чуй 271</h3>
      </Link>
    </div>
  );
}
