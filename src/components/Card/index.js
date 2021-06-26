import React from "react";
import classes from "./card.module.css";

export default function Card({ data }) {
  return (
    <div
      className={classes.card}
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      <div className={classes.card__info}>
        <p>{data.title}</p>
      </div>
    </div>
  );
}
