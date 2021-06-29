import React, { useContext } from "react";
import MainLayout from "../../Layouts/MainLayout";
import classes from "./productDetailPage.module.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { storeContext } from "../../Contexts/StoreContext";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react";
import { notifySuccess } from "../../helpers/notifiers";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

export default function ProductDetailPage() {
  const { productDetail, fetchProductDetail, deleteProduct } =
    useContext(storeContext);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchProductDetail(id);
  }, [id]);

  const handleProductDelete = () => {
    deleteProduct(id).then(() => {
      notifySuccess("Товар был успешно удален!");
      history.push("/");
    });
  };

  return (
    <MainLayout>
      {productDetail ? (
        <>
          <div className={classes.book_review}>
            <img src={productDetail.image} />
            <div className={classes.book_rating_module}>
              <h2>{productDetail.preview}</h2>
              <div className={classes.ratings}>
                <p>READER VOTES</p>
              </div>
            </div>
          </div>
          <div className={classes.actions}>
            <p>
              <BookmarkBorderIcon className={classes.bookmark_icon} /> Избранное
            </p>
            <p>
              <DeleteSweepIcon
                onClick={handleProductDelete}
                className={classes.delete_icon}
              />
              Удалить
            </p>
          </div>
          <div className={classes.book_description}>
            <h2>{productDetail.title}</h2>
            <h3>by {productDetail.book_author}</h3>
            <p>{productDetail.review}</p>
          </div>
        </>
      ) : (
        ""
      )}
    </MainLayout>
  );
}
