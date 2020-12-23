import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BODY } from "../styles/color_pallete";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: `${BODY}`,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
      height: "300px",
      justifyContent: "center",
      backgroundColor: `${BODY}`,
    },
  },
  header: {
    width: "200px",
    padding: theme.spacing(3),
  },
  heading: {
    display: "grid",
    placeItems: "center",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img
          src="https://res.cloudinary.com/ashokpurohit/image/upload/v1571334703/bb_logo.png"
          alt=""
          className={classes.img_fluid}
        />
      </div>
    </div>
  );
};

export default Header;
