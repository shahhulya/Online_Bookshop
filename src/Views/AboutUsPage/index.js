import React from "react";
import MenuBar from "../../components/MenuBar";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import AboutUsHero from "../../components/AboutUsHero/AboutUsHero";
import MainLayout from "../../Layouts/MainLayout";

export default function AboutUsPage() {
  return (
    <MainLayout>
      <MenuBar />
      <AboutUsHero />
      <AboutUs />
    </MainLayout>
  );
}
