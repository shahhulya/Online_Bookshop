import React, { useState, useEffect } from "react";
import axiosInstance from "../../../ApiAuth";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  exitIcon: {
    marginLeft: 10,
    color: "#63606d",
    "&:hover": {
      color: "#fff",
    },
  },
});

export default function Logout() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("account");
    axiosInstance.defaults.headers["Authorization"] = null;
    history.push("/login");
  };
  return (
    <Tooltip title="Logout" aria-label="Logout">
      <ExitToAppIcon className={classes.exitIcon} onClick={handleLogout} />
    </Tooltip>
  );
}
