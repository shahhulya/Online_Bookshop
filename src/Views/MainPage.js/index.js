import React from "react";
import Card from "../../components/Card";
import HeroSlider from "../../components/HeroSlider";
import ItemsSlider from "../../components/ItemsSlider";
import MainLayout from "../../Layouts/MainLayout";

import Footer from "../../components/Footer/Footer";
import FooterSocial from "../../components/FooterSocial/FooterSocial";
export default function MainPage() {
  return (
    <MainLayout>
      <HeroSlider />
      {/* <ItemsSlider /> */}
      <Card />
     
    

    </MainLayout>
  );
}
