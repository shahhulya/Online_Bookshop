import React, { useState } from "react";
import axiosInstance from "../../../ApiAuth";
import { useHistory } from "react-router-dom";
//MaterialUI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    height: "500px",
    borderRadius: "20px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const history = useHistory();
  const initialFormData = Object.freeze({
    email: "",
    // username: '',
    password: "",
    password2: "",
  });
  // <<<<<<< HEAD
  // =======
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(formData);
  //     axiosInstance
  //       .post(`accounts/register/`, {
  //         email: formData.email,
  //         password: formData.password,
  //         password2: formData.password2,
  //       })
  //       .then((res) => {
  //         history.push("/login");
  //         console.log(res);
  //         console.log(res.data);
  //       });
  //     const handleSubmit = (e) => {

  //       e.preventDefault();
  //       console.log(formData);
  // >>>>>>> 4f0fad3dcb3db06c649479ee0cce621b3c3a36fc

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axiosInstance
      .post(`accounts/register/`, {
        email: formData.email,
        password: formData.password,
        password2: formData.password2,
      })
      .then((res) => {
        history.push("/login");
        console.log(res);
        console.log(res.data);
      });
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      axiosInstance
        .post(`accounts/register/`, {
          email: formData.email,
          password: formData.password,
          password2: formData.password2,
        })
        .then((res) => {
          history.push("/login/");
          // console.log(res);
          console.log(res.data);
        });
      // const handleSubmit = (e) => {
      //     e.preventDefault();
      //     console.log(formData);

      // axios.post(`http://92.245.126.22/api/v1/accounts/register/`,
      //     {
      //         "email":
      //             "kubatbek.evrazfit1111@gmail.com"
      //         ,
      //         "password":
      //             "123456123"
      //         ,
      //         "password2":
      //             "123456123"
      //     })
      // axiosInstance
      //     .post(`accounts/register`, {
      //         "email":
      //             "kubatbek1990@mail.ru"
      //         ,
      //         "password":
      //             "123456"
      //         ,
      //         "password2":
      //             "123456"

      //     })
      //     .then((res) => {
      //         history.push('/login');
      //         console.log(res);
      //         console.log(res.data);

      e.preventDefault();
      console.log(formData);

      // axios.post(`http://92.245.126.22/api/v1/accounts/register/`,
      //     {
      //         "email":
      //             "kubatbek.evrazfit1111@gmail.com"
      //         ,
      //         "password":
      //             "123456123"
      //         ,
      //         "password2":
      //             "123456123"
      //     })
      // axiosInstance
      //     .post(`accounts/register`, {
      //         "email":
      //             "kubatbek1990@mail.ru"
      //         ,
      //         "password":
      //             "123456"
      //         ,
      //         "password2":
      //             "123456"

      //     })
      //     .then((res) => {
      //         history.push('/login');
      //         console.log(res);
      //         console.log(res.data);
    };

    //     })
    //     .then((res) => {
    //         history.push('/login');
    //         console.log(res);
    //         console.log(res.data);
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            {/* <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                onChange={handleChange}
                            />
                        </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Потдвержение пароля"
                type="password"
                id="password2"
                autoComplete="current-password"
                onChange={handleChange}
              />
            </Grid>
            {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Регистрация
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                У вас есть аккаунт? Вход
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
