import React, { useContext, useEffect } from "react";
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
      <ItemsSlider products={products} />
    </MainLayout>
  );
}
