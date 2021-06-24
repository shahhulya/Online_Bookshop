import React from "react";
import classes from "../Map/map.module.css";

export default function Map() {
  return (
    <div>
      <iframe
        className={classes.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.3640662426649!2d74.60338042542514!3d42.87699138993688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c32e8e75c9%3A0x2361c8239bb812a5!2z0KDQsNGA0LjRgtC10YI!5e0!3m2!1sru!2skg!4v1624561868029!5m2!1sru!2skg"
      ></iframe>
    </div>
  );
}
