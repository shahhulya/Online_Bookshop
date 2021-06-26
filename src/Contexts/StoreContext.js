import axios from "axios";
import React, { useReducer } from "react";

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const storeContext = React.createContext();
const { REACT_APP_API_URL: URL } = process.env;

export default function StoreContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchProducts = async () => {
    const response = await axios.get(`http://34.89.166.252/api/v1/reviews/`);
    const products = response.data.results;
    console.log(products);

    dispatch({
      type: "SET_PRODUCTS",
      payload: products,
    });
  };

  return (
    <storeContext.Provider value={{ products: state.products, fetchProducts }}>
      {props.children}
    </storeContext.Provider>
  );
}
