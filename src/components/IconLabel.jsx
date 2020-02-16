import React from "react";
import { Grid, Typography } from "@material-ui/core";

const IconLabel = ({ icon, label, variant, justify }) => {
  return (
    <Grid container spacing={1} justify={justify} alignItems="center">
      <Grid item>{icon}</Grid>
      <Grid item>
        <Typography variant={variant}>{label}</Typography>
      </Grid>
    </Grid>
  );
};

export default IconLabel;
