import React from "react";
import { useHistory } from "react-router-dom";
import vid from "../../assets/videos/HeroVideo.mp4";
import classes from "./hero.module.css";
import "typeface-roboto";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
// import { HashLink as Link } from "react-router-hash-link";

export default function Hero() {
  const history = useHistory();

  return (
    <div className={classes.hero}>
      <video autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>

      <div>
        {/* <Link to="/pathLink#yourAnchorTag"> */}
        <a style={{ textDecoration: "none" }} href="#section1">
          <h1>Открой свою книгу</h1>
        </a>

        {/* </Link> */}

        <ScrollableAnchor id={"section1"}>
          <div>ssmewhrfvck.u,akbcfkjbcsjae</div>
        </ScrollableAnchor>
      </div>
    </div>
  );
}
