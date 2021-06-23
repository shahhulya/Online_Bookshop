import React from "react";
import Color from "color";
import { makeStyles } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.4s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 200,
    minHeight: 300,
    borderRadius: 16,
    boxShadow: "none",
    backgroundColor: "#0f0d19",
    transition: "0.4s",
    "&:hover": {
      opacity: 0.7,
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: {
    // display: "none",
    position: "absolute",
    left: 10,
    top: 150,
    padding: "1rem 1.5rem 1.5rem",
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#000",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  //   const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          style={{ height: 300 }}
          image={image}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "#203f52" });
  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={"nowrap"}>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"Dota 2"}
            subtitle={"Be a Legend!"}
            image={
              "	https://s3.amazonaws.com/netgalley-covers/cover180381-medium.png"
            }
          />
        </Grid>
      </Grid>
    </>
  );
});
export default SolidGameCardDemo;
