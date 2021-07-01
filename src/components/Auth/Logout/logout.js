import React, { useState, useEffect } from "react";
import axiosInstance from "../../../API/ApiAuth";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import classes from "../../../Layouts/mainLayout.module.css";

export default function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    history.push("/login");
  }
  return <ExitToAppOutlinedIcon className={classes.accountExitIcon} onClick={handleLogout} />
  // return <Button onClick={handleLogout}>Logout</Button>;
}
