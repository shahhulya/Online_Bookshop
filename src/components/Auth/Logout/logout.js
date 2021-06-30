import React, { useState, useEffect } from "react";
import axiosInstance from "../../../ApiAuth";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    history.push("/login");
  }
  return <button onClick={handleLogout}>Logout</button>;
}
