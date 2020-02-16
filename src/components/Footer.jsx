import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#263238",
    height: "5vh"
  },
  signature: {
    color: "grey",
    padding: "10px"
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Typography variant="caption" className={classes.signature}>
        &copy; Sankalp Heranjal
      </Typography>
    </Grid>
  );
};

export default Footer;
