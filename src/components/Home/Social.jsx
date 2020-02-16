import React from "react";
import { Grid } from "@material-ui/core";
import { Mail, LinkedIn, GitHub, Instagram } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mail: {
    color: "white"
  },
  linkedIn: {
    color: "#0073b1"
  },
  github: {
    color: "white"
  },
  instagram: {
    color: "#e91e63"
  }
});

const Social = () => {
  const classes = useStyles();
  return (
    <Grid container item justify="center" alignItems="center" spacing={2}>
      <Grid item>
        <a
          href="https://github.com/hsankalp"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.github}
        >
          <GitHub />
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://linkedin.com/in/hsankalp/"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.linkedIn}
        >
          <LinkedIn />
        </a>
      </Grid>
      <Grid item>
        <a
          href="mailto:sankalp.heranjal@gmail.com"
          target="_top"
          className={classes.mail}
        >
          <Mail />
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://www.instagram.com/sankalpheranjal"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.instagram}
        >
          <Instagram />
        </a>
      </Grid>
    </Grid>
  );
};

export default Social;
