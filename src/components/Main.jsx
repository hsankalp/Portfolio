import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import { Grid } from "@material-ui/core";
import About from "./About/About";

const useStyles = makeStyles({
  main: {
    height: "93vh"
  }
});

const Main = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.main}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Grid>
  );
};

export default Main;
