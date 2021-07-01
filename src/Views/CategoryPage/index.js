import React, { useContext, useState } from "react";

import { useParams } from "react-router";
import ProductsList from "../../components/productsList";
import { storeContext } from "../../Contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";
import classes from "./categoryPage.module.css";

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
      <h2 className={classes.categoryName}>{name}</h2>
      <ProductsList products={filtred} />

      {products.map(
        (product) =>
          product.category.name == name ? (
            <ProductsList products={filtred} />
          ) : (
            ""
          )

        //         product.category.name == name ? (
        //           <ProductsList products={products} />
        //         ) : (
        //           ""
        //         )
      )}
    </MainLayout>
  );
}
