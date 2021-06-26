// import React, { useEffect, useState } from "react";
// import ItemsCarousel from "react-items-carousel";
// import classes from "./itemsSlider.module.css";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import Card from "../Card";

// export default function ItemsSlider() {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const [number, setNumber] = useState(6);
//   const chevronWidth = 0;

//   // const [count, setCount] = useState(null);

//   window.addEventListener("resize", () => {
//     if (window.innerWidth < 1000) {
//       setNumber(4);
//     }
//     if (window.innerWidth <= 1256) {
//       setNumber(5);
//     }
//     if (window.innerWidth >= 1256) {
//       setNumber(6);
//     }
//     // switch (window.innerWidth) {
//     //   case (window.innerWidth = 1256):
//     //     setNumber(5);
//     //   case (window.innerWidth = 1000):
//     //     setNumber(4);
//     //     break;
//     //   default:
//     //     break;
//     // }
//   });

//   // if (window.innerWidth <= 1000) {
//   //   setCount(4);
//   // } else {
//   //   setCount(6);
//   // }

//   return (
//     <div style={{ padding: `0 ${chevronWidth}px` }}>
//       <ItemsCarousel
//         requestToChangeActive={setActiveItemIndex}
//         activeItemIndex={activeItemIndex}
//         numberOfCards={number}
//         gutter={-10}
//         leftChevron={<ArrowBackIosIcon className={classes.arrowIcon} />}
//         rightChevron={<ArrowForwardIosIcon className={classes.arrowIcon} />}
//         outsideChevron
//         chevronWidth={chevronWidth}
//       >
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </ItemsCarousel>
//     </div>
//   );
// }

// import React, { Component } from "react";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// export default function ItemsSlider() {
//   return (
//     <Carousel>
//       <div>
//         <img src="	https://netgalley-covers.s3.amazonaws.com/cover215414-medium.png" />
//         <p className="legend">Legend 1</p>
//       </div>
//       <div>
//         <img src="	https://netgalley-covers.s3.amazonaws.com/cover215414-medium.png" />
//         <p className="legend">Legend 2</p>
//       </div>
//       <div>
//         <img src="	https://netgalley-covers.s3.amazonaws.com/cover215414-medium.png" />
//         <p className="legend">Legend 3</p>
//       </div>
//     </Carousel>
//   );
// }

import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function ItemsSlider({ products }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6,
      slidesToSlide: 4, // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1200, min: 1000 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1000, min: 800 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet2: {
      breakpoint: { max: 800, min: 600 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      responsive={responsive}
      // customRightArrow={<ArrowForwardIosIcon />}
    >
      {products.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </Carousel>
  );
}
