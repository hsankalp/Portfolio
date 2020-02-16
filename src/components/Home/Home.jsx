import React from "react";
import { Grid, Typography } from "@material-ui/core";
import profileImage from "../../images/home-profile.PNG";
import { makeStyles } from "@material-ui/core/styles";
import Social from "./Social";

const useStyles = makeStyles({
  home: {
    textAlign: "center",
    height: "inherit"
  },
  profileImage: {
    border: "3px solid darkcyan",
    borderRadius: "50%",
    width: "200px"
  },
  saveResume: {
    textDecoration: "none"
  }
});

const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.home}
      spacing={3}
    >
      <Grid item>
        <img
          className={classes.profileImage}
          src={profileImage}
          alt="profile"
        />
      </Grid>
      <Grid item>
        <Typography variant="h3">Hi, I'm Sankalp Heranjal</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">Full Stack Software Engineer</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          JavaScript | Reactjs | HTML | CSS | Java | Spring | Microservices |
          Serverless
        </Typography>
      </Grid>
      <Grid item>
        <Social />
      </Grid>
    </Grid>
  );
};

export default Home;
