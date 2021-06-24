import React from "react";
import Card from "../../components/Card";
import HeroSlider from "../../components/HeroSlider";
import ItemsSlider from "../../components/ItemsSlider";
import MainLayout from "../../Layouts/MainLayout";

export default function MainPage() {
  return (
    <MainLayout>
      <HeroSlider />
      <ItemsSlider />
      {/* <Card /> */}
    </MainLayout>
  );
}
