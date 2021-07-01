import React from "react";
import classes from "../Footer/footer.module.css";

import { Link } from "react-router-dom";
import FooterSocial from "../FooterSocial/FooterSocial";

export default function Footer() {
  return (
    <div className={classes.footer_wrapper}>
      <div className={classes.footer_section}>
        <h3 style={{ color: "crimson" }}>Sections</h3>

        <li>Novels</li>
        <li>Dramas</li>
        <li>Overview</li>
      </div>

      {/* </div> */}
      <div>
        <h3 style={{ color: "crimson" }}> About Us</h3>
        <Link to="/AboutUsPage">
          <li style={{ color: "white" }}>About Company</li>
        </Link>
        <Link to="/AddressPage">
          <li style={{ color: "white" }}>Contacts and addresses</li>
        </Link>

        <li>Partners</li>
      </div>
    </div>
  );
}
