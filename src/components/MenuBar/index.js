import React, { useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CategoryIcon from "@material-ui/icons/Category";
import menuBarClasses from "./menuBar.module.css";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import StarBorder from "@material-ui/icons/StarBorder";
import { storeContext } from "../../Contexts/StoreContext";

const useStyles = makeStyles({
  list: {
    width: 250,
    backgroundColor: "#f6f5ff",
  },
  fullList: {
    width: "auto",
  },
  nested: {
    fontSize: 10,
  },
});

export default function MenuBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [open, setOpen] = React.useState(true);

  const { categories, fetchCategories } = useContext(storeContext);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map((category) => (
            <ListItem key={category.id} button className={classes.nested}>
              <ListItemText primary={category.name}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuRoundedIcon className={menuBarClasses.burgerMenu} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
