import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  divider: {
    backgroundColor: "white"
  }
});

const Heading = ({ value }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" color="primary">
        {value}
      </Typography>
      <Divider className={classes.divider} variant="fullWidth"></Divider>
    </div>
  );
};

export default Heading;
