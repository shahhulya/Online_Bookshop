// import React, { useEffect, useReducer, useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router";
// import {
//     getCountProductsCart,
//     getCountFavourites,
//     calcsubPrice,
//     calcTotalPrice,
// } from "../helpers/calcPrice";

// export const productContext = React.createContext();
// const INIT_STATE = {
//     productsData: [],
//     commentsData: [],
//     productDetails: null,
//     searchData: [],
//     next: "",
//     prev: "",
//     allPages: 0,
//     productEdit: null,
//     favourite: {},
//     cart: {},
//     cartLength: getCountProductsCart(),
//     favouriteLength: getCountFavourites(),
// };
// const reducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//         case "GET_PRODUCTS":
//             return {
//                 ...state,
//                 productsData: action.payload,
//                 allPages: action.num,
//             };
//         case "GET_PRODUCT_DETAILS":
//             return { ...state, productDetails: action.payload };
//         case "SEARCH":
//             return { ...state, searchData: action.payload };
//         case "GET_EDITED_PRODUCT":
//             return { ...state, productEdit: action.payload };
//         case "GET_CART":
//             return { ...state, cart: action.payload };
//         case "CHANGE_CART_COUNT":
//             return { ...state, cartLength: action.payload };
//         case "LEAVE_COMMENT":
//             return { ...state, commentsData: action.payload };
//         case "GET_FAVOURITE":
//             return { ...state, favourite: action.payload };
//         case "CHANGE_FAVOURITE_COUNT":
//             return { ...state, favouriteLength: action.payload };
//         default:
//             return state;
//     }
// };
// const ProductContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, INIT_STATE);
//     const [page, setPage] = useState(1);
//     const history = useHistory();
//     function postNewProduct(product, history) {
//         axios.post("http://localhost:8000/products", product);
//         getProducts(history);
//     }

//     useEffect(() => {
//         getProducts(history);
//         leaveComment();
//     }, [page]);

//     async function getProducts(history) {
//         const search = new URLSearchParams(history.location.search);
//         search.set("_limit", 6);
//         history.push(${history.location.pathname}?${search.toString()});
//         let res = await axios.get(
//             http://localhost:8000/products?_page=${page}&_limit=6&${window.location.search}
//         );
//         let num = Math.ceil(res.headers["x-total-count"] / 6);

//         dispatch({
//             type: "GET_PRODUCTS",
//             payload: res.data,
//             num: num,
//         });
//     }
//     async function getProductDetails(id) {
//         let { data } = await axios.get(http://localhost:8000/products/${id});
//         dispatch({
//             type: "GET_PRODUCT_DETAILS",
//             payload: data,
//             //для хранения данных вызываем dispatch
//         });
//     }
//     async function saveProduct(id, newProduct) {
//         await axios.patch(http://localhost:8000/products/${id}, newProduct);
//         getProductDetails(id);
//     }
//     async function search(value) {
//         let { data } = await axios.get(
//             http://localhost:8000/products/?q=${value}
//         );
//         dispatch({
//             type: "SEARCH",
//             payload: data,
//         });
//     }
//     async function deleteProduct(id, history) {
//         await axios.delete(http://localhost:8000/products/${id});
//         getProducts(history);
//     }
//     async function getProductEdit(id) {
//         let { data } = await axios.get(http://localhost:8000/products/${id});
//         dispatch({
//             type: "GET_EDITED_PRODUCT",
//             payload: data,
//         });
//     }
//     async function saveEditedProduct(id, newProduct) {
//         await axios.patch(http://localhost:8000/products/${id}, newProduct);
//         getProducts(history);
//         getProductDetails(id);
//     }
//     function addProductToCart(product) {
//         let cart = JSON.parse(localStorage.getItem("cart"));
//         if (!cart) {
//             cart = {
//                 products: [],
//                 totalPrice
