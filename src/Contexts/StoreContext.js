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
        fetchProducts,
        fetchCategories,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}
