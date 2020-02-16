import React from "react";
import { Grid, Typography, Divider, LinearProgress } from "@material-ui/core";
import { data } from "../../data/skillsData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  divider: {
    backgroundColor: "white"
  }
});

const Skills = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h5" color="primary">
          Skills
        </Typography>
      </Grid>
      <Divider className={classes.divider} variant="fullWidth"></Divider>

      <Grid item container direction="column" spacing={3}>
        {data.map(skill => (
          <Grid item key={skill.name}>
            <Typography variant="h6" color="secondary">
              {skill.name}
            </Typography>
            <LinearProgress variant="determinate" value={skill.score} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Skills;
