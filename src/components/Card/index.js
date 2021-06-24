import React from "react";
import classes from "./card.module.css";

export default function Card() {
  return (
    <div
      className={classes.card}
      style={{
        backgroundImage:
          "url(https://s3.amazonaws.com/netgalley-covers/cover180381-medium.png)",
      }}
    >
      <div className={classes.card__info}>
        <p>Text</p>
      </div>
    </div>
  );
}
