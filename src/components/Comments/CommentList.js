import React, { useState, useMemo } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import { useComments } from "../../Context/CommentContext";

const CommentList = () => {
  const [filter, setFilter] = useState("all");
  const { comments, toggleComment, removeComment } = useComments();
  const filteredComments = useMemo(() => {
    if (filter === "all") {
      return comments;
    } else if (filter === "completed") {
      return comments.filter((t) => t.completed);
    } else if (filter === "not_completed") {
      return comments.filter((t) => !t.completed);
    }
  }, [comments, filter]);
  return (
    <>
      <List>
        {filteredComments.map((comment) => {
          return (
            <ListItem key={comment.id}>
              <ListItemText primary={comment.text} />
              <ListItemSecondaryAction>
                <Checkbox
                  checked={comment.completed}
                  onClick={() => toggleComment(comment.id)}
                />
                <IconButton onClick={() => removeComment(comment.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
      <Box pr={1} component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setFilter("all")}
        >
          All
        </Button>
      </Box>
      <Box pr={1} component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </Box>
      <Box component="span">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setFilter("not_completed")}
        >
          Due
        </Button>
      </Box>
    </>
  );
};

export default CommentList;
