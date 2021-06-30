
// import React from "react";
// import { useParams } from "react-router";
// import MainLayout from "../../Layouts/MainLayout";

// export default function CategoryPage() {
//   const { id } = useParams();

//   return <MainLayout></MainLayout>;
// }
// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router';
// import HeroSlider from '../../components/HeroSlider';
// import Loader from '../../components/Loader';
// import ProductsList from '../../components/ProductsList';
// import { storeContext } from '../../contexts/StoreContext';
// import MainLayout from '../../Layouts/MainLayout';

// export default function CategoryPage() {
//   const { id } = useParams();
//   const { products, fetchBrandProducts, fetchBrandDetail, brandDetail } =
//     useContext(storeContext);

//   useEffect(() => {
//     fetchCategory(id);
//     fetchCategoryDetail(id);
//   }, [id]);

//   return (
//     <MainLayout>
//       {products.length && brandDetail ? (
//         <>
//           {/* <HeroSlider
//             slider={brandDetail.sliderImages.map((src) => ({
//               title: `${brandDetail.title} hero slider`,
//               src,
//             }))}
//           /> */}
//           <ProductsList products={products} />
//         </>
//       ) : (
//         <Loader />
// =======
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
        // >>>>>>> 4cb9607d5f41950380f21be831ae463fc2727d69
      )}
    </MainLayout>
  );
}
