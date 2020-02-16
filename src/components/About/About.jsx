import React from "react";
import { Grid } from "@material-ui/core";
import Experience from "./Experience";
import Education from "./Education";
import Bio from "./Bio";
import { makeStyles } from "@material-ui/core/styles";
import Certifications from "./Certifications";
import Skills from "./Skills";

const useStyles = makeStyles({
  column: {
    padding: "25px",
    height: "93vh",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  }
});

const About = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid className={classes.column} item xs={12} md={4}>
        <Bio />
      </Grid>
      <Grid className={classes.column} item xs={12} md={8}>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Experience />
          </Grid>
          <Grid item>
            <Education />
          </Grid>
          <Grid item>
            <Certifications />
          </Grid>
          <Grid item>
            <Skills />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
