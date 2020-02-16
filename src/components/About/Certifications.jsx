import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import { data } from "../../data/certificationData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  divider: {
    backgroundColor: "white"
  }
});

const Certifications = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h5" color="primary">
          Certifications and Awards
        </Typography>
      </Grid>
      <Divider className={classes.divider} variant="fullWidth"></Divider>

      {data.map(award => (
        <Grid item container direction="column" spacing={1} key={award.name}>
          <Grid item>
            <Typography variant="h6" color="secondary">
              {award.name}
            </Typography>
            <Typography variant="subtitle1">{award.description}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">{award.year}</Typography>
          </Grid>
          {award.link && (
            <Grid item>
              <a href={award.link} rel="noopener noreferrer" target="_blank">
                See credential
              </a>
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Certifications;
