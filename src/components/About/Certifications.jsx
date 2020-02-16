import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { data } from "../../data/certificationData";
import Heading from "../Heading";

const Certifications = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Heading value="Certifications and Awards" />
      </Grid>

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
