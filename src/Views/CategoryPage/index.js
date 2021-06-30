
import React, { useContext, useState } from "react";

import { useParams } from "react-router";
import ProductsList from "../../components/productsList";
import { storeContext } from "../../Contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";

export default function CategoryPage() {
  const { name } = useParams();
  console.log(name);

  //   const { filtredProducts, setFiltredProducts } = useState(null);

  const { categories, products } = useContext(storeContext);

  const filtred = products.filter((product) => product.category.name == name);
  console.log(filtred);
  //   setFiltredProducts(filtred);

  return (
    <MainLayout>
      {products.map((product) =>

        product.category.name == name ? <ProductsList products={filtred} /> : ""

//         product.category.name == name ? (
//           <ProductsList products={products} />
//         ) : (
//           ""
//         )

      )}s

    </MainLayout>
  );
}
