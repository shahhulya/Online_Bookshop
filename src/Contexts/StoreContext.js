
import { AddComment } from "@material-ui/icons";
import axios from "axios";
import React, { useReducer } from "react";
<<<<<<< HEAD
import axiosInstance from "../API/ApiAuth";
=======
import axiosInstance from "../ApiAuth";
>>>>>>> 136d6e7940b0d895cf6d6b8d4c0d1022833fd74d

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
<<<<<<< HEAD
    // const response = await axios.get(`${URL}/api/v1/reviews/`);
    // const products = response.data.results;
    const response = await axios.get(`${localURL}/products`);
    const products = response.data;
    console.log(response);
=======
    const response = await axios.get(`${URL}/api/v1/reviews/`);
    const products = response.data.results;
    // const response = await axios.get(`${localURL}/products`);
    // const products = response.data;
    // console.log(products);
>>>>>>> 136d6e7940b0d895cf6d6b8d4c0d1022833fd74d

    dispatch({
      type: "SET_PRODUCTS",
      payload: products,
    });
  };


  const fetchSearchProducts = async (value) => {
    const response = await axios.get(`${localURL}/products/?q=${value}`);
    const products = response.data;

    dispatch({
      type: 'SET_PRODUCTS',
      payload: {
        data: products,
      },
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
<<<<<<< HEAD

    const response = await axiosInstance.post(`${URL}api/v1/reviews/`, product);
    //   //   // const response = await axios.post(`${localURL}/products`, product);
=======
    console.log(product);
    const response = await axiosInstance.post(
      `${URL}/api/v1/reviews/`,
      product
    );
    // const response = await axios.post(`${localURL}/products`, product);
>>>>>>> 136d6e7940b0d895cf6d6b8d4c0d1022833fd74d
    const createProduct = response.data;

    dispatch({
      type: "ADD_PRODUCT",
      payload: createProduct,
    });

    return createProduct.id;
    // const accesss = JSON.parse(`${localStorage.getItem("access_token")}`)
    // const response = await axios.post(`${URL}/api/v1/reviews/`, product, {
    //   headers: {
    //     Authorization: `Bearer ${accesss}`
    //   }
    // }
    // );
    // const createdProduct = response.data;

    // dispatch({
    //   type: 'ADD_PRODUCT',
    //   payload: createdProduct,
    // });

  };

  const deleteProduct = async (id) => {
    // await axios.delete(`${localURL}/products/${id}`);
    await axiosInstance.delete(`${URL}/api/v1/review/${id}/`);
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  };

  // <<<<<<< HEAD
  //   const updateProduct = async (id, data) => {
  //     await axios.patch(`${localURL}/products/${id}`, data);
  // =======
  const updateProduct = async (id, formData) => {
    // await axios.patch(`${localURL}/products/${id},` data);
    await axiosInstance.patch(`${URL}/api/v1/review/${id}/`, formData);

    // >>>>>>> 136d6e7940b0d895cf6d6b8d4c0d1022833fd74d
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
        fetchSearchProducts,
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
