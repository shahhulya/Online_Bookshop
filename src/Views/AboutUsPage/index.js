import React from "react";
import MenuBar from "../../components/MenuBar";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import AboutUsHero from "../../components/AboutUsHero/AboutUsHero";

export default function AboutUsPage() {
  return (
    <div>
      <MenuBar />
      <AboutUsHero />
      <AboutUs />
      <Footer />
    </div>
  );
}
