import React from "react";
import { useHistory } from "react-router-dom";
import vid from "../../assets/videos/Video.mp4";
import classes from "./aboutUsHero.module.css";

export default function AboutUsHero() {
  const history = useHistory();

  return (
    <div className={classes.hero}>
      <video autoPlay loop muted>
        <source src={vid} type="Video/mp4" />
      </video>
    </div>
  );
}
