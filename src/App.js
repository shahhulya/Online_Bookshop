import React from "react";
import StoreContextProvider from "./Contexts/StoreContext";
import Routes from "./Routes";

export default function App() {
  return (
    <StoreContextProvider>
      <Routes />
    </StoreContextProvider>
  );
}
