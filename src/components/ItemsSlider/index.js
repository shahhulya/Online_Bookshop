import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import classes from "./itemsSlider.module.css";
import Card from "../Card";

export default function ItemsSlider() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div
      className={classes.itemsSlider}
      style={{ padding: `0 ${chevronWidth}px` }}
    >
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={6}
        gutter={20}
        leftChevron={<button>{<ArrowBackIosIcon />}</button>}
        rightChevron={<button>{<ArrowForwardIosIcon />}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 250, background: "#EEE" }}>first card</div>
        <div style={{ height: 250 }}>
          <Card />
        </div>
        <div style={{ height: 250, background: "#EEE" }}>Third card</div>
        <div style={{ height: 250, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 250, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 250, background: "#EEE" }}>Fourth card</div>
        <div style={{ height: 250, background: "#EEE" }}>Fourth card</div>
      </ItemsCarousel>
    </div>
  );
}
