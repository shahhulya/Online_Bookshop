import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { storeContext } from "../../Contexts/StoreContext";
import Card from "../../components/Card/";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    margin: "0 auto",
  },
}));

export default function ProductsList({ products }) {
  const classes = useStyles();

  const { fetchProducts } = useContext(storeContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={classes.root}>
      <Grid className={classes.container} container spacing={10}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Card data={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
