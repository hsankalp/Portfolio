import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navBar: {
    backgroundColor: "#18252c",
    height: "7vh"
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "darkcyan"
    }
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.navBar}
      container
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      <Grid item>
        <Link to="/" className={classes.navLink}>
          HOME
        </Link>
      </Grid>

      <Grid item>
        <Link to="/about" className={classes.navLink}>
          ABOUT
        </Link>
      </Grid>

      <Grid item>
        <Link to="/projects" className={classes.navLink}>
          PROJECTS
        </Link>
      </Grid>
    </Grid>
  );
};

export default Header;
