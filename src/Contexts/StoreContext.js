import { AddComment } from "@material-ui/icons";
import axios from "axios";
import React, { useReducer } from "react";
import axiosInstance from "../ApiAuth";

const INIT_STATE = {
  products: [],
  categories: [],
  productDetail: null,
  // categoryDetail: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "SET_PRODUCT_DETAIL":
      return {
        ...state,
        productDetail: action.payload,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "CLEAR_PRODUCT":
      return {
        ...state,
        productDetail: null,
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

const localURL = "http://localhost:8000";

export default function StoreContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchProducts = async () => {
    const response = await axios.get(`${URL}/api/v1/reviews/`);
    const products = response.data.results;
    // const response = await axios.get(`${localURL}/products`);
    // const products = response.data;
    // console.log(products);

    dispatch({
      type: "SET_PRODUCTS",
      payload: products,
    });
  };

  const fetchProductDetail = async (id) => {
    const response = await axios.get(`${URL}/api/v1/review/${id}`);
    // const response = await axios.get(`${localURL}/products/${id}`);
    const productDetail = response.data;

    dispatch({
      type: "SET_PRODUCT_DETAIL",
      payload: productDetail,
    });
  };

  const fetchCategories = async () => {
    const response = await axios.get(`${URL}/api/v1/categories/list/`);
    // const response = await axios.get(`${localURL}/categories`);
    const categories = response.data;
    // console.log(categories);

    dispatch({
      type: "SET_CATEGORIES",
      payload: categories,
    });
  };

  const createProduct = async (product) => {
    console.log(product);
    const response = await axiosInstance.post(
      `${URL}/api/v1/reviews/`,
      product
    );
    // const response = await axios.post(`${localURL}/products`, product);
    const createProduct = response.data;

    dispatch({
      type: "ADD_PRODUCT",
      payload: createProduct,
    });

    return createProduct.id;
  };

  const deleteProduct = async (id) => {
    // await axios.delete(`${localURL}/products/${id}`);
    await axiosInstance.delete(`${URL}/api/v1/review/${id}/`);
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  };

  const updateProduct = async (id, formData) => {
    // await axios.patch(`${localURL}/products/${id},` data);
    await axiosInstance.patch(`${URL}/api/v1/review/${id}/`, formData);

    dispatch({
      type: "CLEAR_PRODUCT",
    });
  };

  const addComment = async (id, body) => {
    axiosInstance.post(`${URL}/api/v1/comments/`, {
      body: body,
      review: id,
    });
  };

  const deleteComment = async (id) => {
    axiosInstance.delete(`${URL}/api/v1/comments/${id}`);
  };

  return (
    <storeContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        productDetail: state.productDetail,
        fetchProducts,
        fetchProductDetail,
        fetchCategories,
        createProduct,
        deleteProduct,
        updateProduct,
        addComment,
        deleteComment,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}
