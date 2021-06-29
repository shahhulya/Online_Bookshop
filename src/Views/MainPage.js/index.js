import React, { useContext, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import HeroSlider from "../../components/HeroSlider";
import ItemsSlider from "../../components/ItemsSlider";
import { storeContext } from "../../Contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";

export default function MainPage() {
  const { products, fetchProducts } = useContext(storeContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MainLayout>
      {/* <HeroSlider /> */}
      <Hero />
      <ItemsSlider products={products} />
      <ItemsSlider products={products} />
      <ItemsSlider products={products} />

    </MainLayout>
  );
}
