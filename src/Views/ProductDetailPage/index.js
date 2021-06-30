import React, { useContext } from "react";
import MainLayout from "../../Layouts/MainLayout";
import classes from "./productDetailPage.module.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import { storeContext } from "../../Contexts/StoreContext";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react";
import { notifySuccess } from "../../helpers/notifiers";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import CreateIcon from "@material-ui/icons/Create";

import CommentInput from "../../components/Comments/CommentList";
import CommentList from "../../components/Comments/CommentInput";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


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
              <BookmarkBorderIcon className={classes.bookmark_icon} /> Favorite
            </p>
            <p onClick={handleProductDelete}>
              <DeleteSweepIcon className={classes.delete_icon} />
              Delete
            </p>
            <p onClick={() => history.push(`/products/${id}/update`)}>
              <CreateIcon /> Change
            </p>
          </div>
          <div className={classes.book_description}>
            <h2>{productDetail.title}</h2>
            <h3>by {productDetail.book_author}</h3>
            <p>{productDetail.review}</p>
          </div>
<<<<<<< HEAD
        </>
      ) : (
        ""
      )}
=======
        </div>
      </div>
      <div className={classes.favorite}>
        <p>
          <BookmarkBorderIcon className={classes.bookmark_icon} /> Избранное
        </p>
      </div>
      <div className={classes.book_description}>
        <h2>THE OTHER BLACK GIRL</h2>
        <h3>BY ZAKIYA DALILA HARRIS</h3>
        <p>
          In Harris’ slyly brilliant debut, a young editorial assistant is
          thrilled when her glaringly White employer hires another Black
          woman—but it soon becomes clear there’s something sinister about the
          new girl, who isn’t what she seems. Young, literary, and ambitious,
          Nella Rogers has spent the last two years as an editorial assistant at
          Wagner Books, a premier New York City publishing house, where, for the
          entirety of her (somewhat stalled) tenure, she’s been the only Black
          person in the room. How she feels about this depends on the day—for
          all her frustrations, she can’t help but be a little proud of her
          outsider status—but still, she’s excited when she detects another
          Black girl on her floor: finally, someone else who gets it. And she
          does, at first. Wagner’s newest editorial assistant, Hazel-May McCall,
          cool and self-possessed, is quick to befriend Nella, echoing her
          frustrations with the never-spoken racial politics of their office,
          encouraging her to speak up. But it doesn’t take long for Nella to
          realize there’s something off about Hazel, even if she can’t quite put
          her finger on it. There’s something weird about how easily she fits in
          among the higher-ups at Wagner, about the way she's instantly and
          universally beloved by top editors, the way her story—born in Harlem,
          daughter of civil rights activists, a grandfather who died
          protesting—exactly matches their ideas about Blackness in a way that
          Nella’s middle-class suburban childhood never will. And then, shortly
          after Hazel's arrival, the first anonymous note arrives on Nella’s
          desk: “Leave Wagner Now.” Hazel? And if not Hazel, then who? Nella
          begins searching for answers—and in the process, finds herself at the
          center of a dangerous conspiracy that runs far deeper than she ever
          could have known. If it sounds like a moralistic sledgehammer of a
          novel—well, it would be if Harris were any less good. In her hands,
          though, it’s a nuanced page-turner, as sharp as it is fun. A biting
          social satire–cum-thriller; dark, playful, and brimming with life.
        </p>
        <Box p={2}>
          <Grid container direction="column">
            <Grid item>
              <CommentInput />
            </Grid>
            <Grid item>
              <CommentList />
            </Grid>
          </Grid>
        </Box>
      </div>
>>>>>>> master
    </MainLayout>
  );
}
