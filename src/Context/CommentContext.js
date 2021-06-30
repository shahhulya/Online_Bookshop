import React, { useContext, createContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const Context = createContext({
  comments: [],
});

const Provider = (props) => {
  const { children } = props;
  const [comments, setComments] = useLocalStorage("comments", [
    {
      id: 0,
      text: "feed the dog",
      completed: false,
    },
    {
      id: 1,
      text: "go shopping",
      completed: false,
    },
    {
      id: 2,
      text: "hang glide",
      completed: false,
    },
  ]);
  const addComment = (text) => {
    const nextId =
      comments.length > 0 ? Math.max(...comments.map((t) => t.id)) + 1 : 0;
    const newComment = {
      id: nextId,
      text,
      completed: false,
    };
    setComments([...comments, newComment]);
  };
  const removeComments = (id) => {
    const newComment = comments.filter((t) => t.id !== id);
    setComments(newComment);
  };
  const toggleComment = (id) => {
    const foundComment = comments.find((t) => t.id === id);
    if (foundComment) {
      foundComment.completed = !foundComment.completed;
    }
    const newComments = comments.map((t) => {
      if (t.id === id) {
        return foundComment;
      }
      return t;
    });
    setComments(newComments);
  };
  return (
    <Context.Provider
      value={{ comments, addComment, removeComments, toggleComment }}
    >
      {children}
    </Context.Provider>
  );
};

export const useComments = () => useContext(Context);

export const withProvider = (Component) => {
  return (props) => {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
};
