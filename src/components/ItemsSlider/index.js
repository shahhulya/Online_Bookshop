import React, { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel";
import classes from "./itemsSlider.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Card from "../Card";

export default function ItemsSlider() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [number, setNumber] = useState(6);
  const chevronWidth = 0;

  // const [count, setCount] = useState(null);

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1256) {
      setNumber(5);
    }
    if (window.innerWidth >= 1256) {
      setNumber(6);
    }
    // if (window.innerWidth <= 1000) {
    //   setNumber(4);
    // }
  });

  // if (window.innerWidth <= 1000) {
  //   setCount(4);
  // } else {
  //   setCount(6);
  // }

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={number}
        gutter={-10}
        leftChevron={<ArrowBackIosIcon className={classes.arrowIcon} />}
        rightChevron={<ArrowForwardIosIcon className={classes.arrowIcon} />}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ItemsCarousel>
    </div>
  );
}
