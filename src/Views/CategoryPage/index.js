import React, { useContext } from "react";
import { useParams } from "react-router";
import ProductsList from "../../components/productsList";
import { storeContext } from "../../Contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";

export default function CategoryPage() {
  const { name } = useParams();
  console.log(name);

  const { categories, products } = useContext(storeContext);

  return (
    <MainLayout>
      {products.map((product) =>
        product.category.name == name ? (
          <ProductsList products={products} />
        ) : (
          ""
        )
      )}
    </MainLayout>
  );
}
