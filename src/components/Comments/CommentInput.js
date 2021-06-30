import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useComments } from "../../Context/CommentContext";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 400,
    [theme.breakpoints.down("xs")]: {
      width: 200,
    },
  },
}));

const CommentInput = (props) => {
  const { addComment } = useComments();
  const classes = useStyles();
  const [newComment, setNewComment] = useState("");
  const onClick = () => {
    addComment(newComment);
    setNewComment("");
  };
  return (
    <>
      <Grid container>
        <Grid item>
          <TextField
            style={{ backgroundColor: "white" }}
            className={classes.textField}
            label="What do you want to write?"
            variant="outlined"
            size="small"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Box pl={1}>
            <Button
              disabled={newComment.length === 0}
              variant="contained"
              color="primary"
              onClick={onClick}
            >
              Add Comment
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CommentInput;
