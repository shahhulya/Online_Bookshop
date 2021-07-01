import React, { useState, useEffect } from "react";
import axiosInstance from "../../../API/ApiAuth";
import { useHistory } from "react-router-dom";
// <<<<<<< HEAD
import { Button } from "@material-ui/core";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import classes from "../../../Layouts/mainLayout.module.css";
// =======
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
//>>>>>>> 136d6e7940b0d895cf6d6b8d4c0d1022833fd74d

export default function Logout() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("account");
    axiosInstance.defaults.headers["Authorization"] = null;
    history.push("/login");
    // <<<<<<< HEAD
    //   }
    //   return <ExitToAppOutlinedIcon className={classes.accountExitIcon} onClick={handleLogout} />
    //   // return <Button onClick={handleLogout}>Logout</Button>;
    // =======
  };
  return (
    <Tooltip title="Logout" aria-label="Logout">
      <ExitToAppIcon className={classes.exitIcon} onClick={handleLogout} />
    </Tooltip>
  );

}
