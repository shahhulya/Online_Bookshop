import React from "react";
import { useHistory } from "react-router-dom";
import vid from "../../assets/videos/HeroVideo.mp4";
import classes from "./hero.module.css";
// import "typeface-roboto";

export default function Hero() {
  const history = useHistory();

  return (
    <div className={classes.hero}>
      <video autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>

      <div>
        {/* <h1>Открой свою книгу</h1> */}
        {/* <button onClick={() => history.push("/register")} className="btn">
          join
        </button> */}
      </div>
    </div>
  );
}
