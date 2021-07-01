import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import MainLayout from "../../Layouts/MainLayout";
import * as Yup from "yup";
import { Button, FormControl, TextField, Typography } from "@material-ui/core";
import classes from "./productCreate.module.css";
import TextError from "../../components/TextError";
import { notifySuccess } from "../../helpers/notifiers";
import { useHistory } from "react-router";
import { storeContext } from "../../Contexts/StoreContext";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ProductCreatePage() {
  const { categories, createProduct } = useContext(storeContext);

  const history = useHistory();

  const options = categories.map((category) => category);
  console.log(options);

  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  console.log(inputValue)
  const initialValues = {
    title: '',
    book_author: '',
    preview: '',
    review: '',
    category: '',
    image: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Обязательное поле!"),
    book_author: Yup.string().required("Обязательное поле!"),
    preview: Yup.string().required("Обязательное поле!"),
    review: Yup.string().required("Обязательное поле!"),
    category: Yup.string().required("Обязательное поле!"),
    // category: Yup.number().typeError('Введите число!'),
    //   .required('Обязательное поле!'),
    // image: Yup.string().required("Обязательное поле!"),
  });

  // console.log(initialValues)

  const onSubmit = (values, actions) => {
    createProduct({
      ...values,
      comments: [],
    }).then((id) => {
      actions.resetForm();
      notifySuccess("Продукт был создан!");
      history.push(`/products/${id}`);
    });
  };

  return (
    <MainLayout>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form className={classes.form}>
              <Typography variant="h4">Создание продукта</Typography>
              <label>Title</label>
              <Field
                className={classes.input}
                name="title"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="title" />
              <label>Book Author</label>
              <Field
                className={classes.input}
                name="book_author"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="book_author" />
              <label>Preview</label>
              <Field
                className={classes.input}
                name="preview"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="preview" />
              <label>Review</label>
              <Field
                variant="outlined"
                className={classes.input}
                rows={8}
                multiline
                name="review"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="review" />

              <label>Category</label>
              <Field
                variant="outlined"
                className={classes.input}
                name="category"
                as={TextField}
              />

              {/* //<div className={classes.category}>
                {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
                <div>{`inputValue: '${inputValue}'`}</div>
                <br /> */}
              {/* <Autocomplete */}
              {/* className={classes.autocomplete} */}
              {/* value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options.map((category) => category.name)}

                style={{ width: 300 }}

                renderInput={(params) => (
                  <Field
                    {...params}
                    name="category"
                    as={TextField}
                    // label="Controllable"
                    variant="outlined"
                  />
                )}
              />
              </div>  */}
              < ErrorMessage component={TextError} name="category" />

              <label>Image</label>
              <Field
                className={classes.input}
                name="image"
                variant="outlined"
                as={TextField}
              />
              <ErrorMessage component={TextError} name="image" />
              <Button type="submit" color="secondary" variant="contained">
                Создать
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </MainLayout >
  );
}
