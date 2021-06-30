import axios from "axios";
import React, { useReducer } from "react";

const INIT_STATE = {
  products: [],
  categories: [],
  // categoryDetail: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    // case "SET_CATEGORY_DETAIL":
    //   return {
    //     ...state,
    //     categoryDetail: action.payload,
    //   };
    default:
      return state;
  }
};

export const storeContext = React.createContext();
const { REACT_APP_API_URL: URL } = process.env;

export default function StoreContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchProducts = async () => {
    const response = await axios.get(`${URL}/api/v1/reviews/?page=1`);
    const products = response.data.results;
    console.log(response);

    dispatch({
      type: "SET_PRODUCTS",
      payload: products,
    });
  };

  const fetchCategories = async () => {
    const response = await axios.get(`${URL}/api/v1/categories/list/`);
    const categories = response.data;
    console.log(categories);

    dispatch({
      type: "SET_CATEGORIES",
      payload: categories,
    });
  };





  const fetchBrands = async () => {
    const response = await axios.get(`${URL}/api/v1/categories/list/`);
    const brands = response.data;
    dispatch({
      type: 'SET_BRANDS',
      payload: brands,
    });
  };

  const fetchBrandProducts = async (brandId) => {
    const response = await axios.get(`${URL}/api/v1/categories/detail/${brandId}`);
    const products = response.data;
    console.log(response)
    dispatch({
      type: 'SET_PRODUCTS',
      payload: {
        data: products,
      },
    });
  };

  const fetchBrandDetail = async (brandId) => {
    const response = await axios.get(`${URL}/api/v1/categories/${brandId}`);
    const brand = response.data;

    dispatch({
      type: 'SET_BRAND_DETAIL',
      payload: brand,
    });
  };


  const fetchSearchProducts = async (value) => {
    const response = await axios.get(`${URL}api/v1/reviews/?q=${value}`);
    const products = response.data;
    const total = response.headers["x-total-count"];

    dispatch({
      type: "SET_PRODUCTS",
      payload: {
        data: products,
        total,
      },
    });
  };

  // const fetchCategoryProducts = async (categoryId) => {
  //   const response = await axios.get(`${URL}/products/?category=${brandId}`);
  //   const products = response.data;

  //   dispatch({
  //     type: "SET_PRODUCTS",
  //     payload: products,
  //   });
  // };

  // const fetchCategoryDetail = async (categoryId) => {
  //   const response = await axios.get(
  //     `${URL}/api/v1/categories/list/${categoryId}`
  //   );
  //   const category = response.data;

  //   dispatch({
  //     type: "SET_CATEGORY_DETAIL",
  //     payload: category,
  //   });
  // };

  return (
    <storeContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        fetchBrandDetail,
        fetchBrands,
        fetchProducts,
        fetchBrandProducts,
        fetchCategories,
        fetchSearchProducts,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}
