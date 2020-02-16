import React from "react";
import { Grid, Typography, LinearProgress } from "@material-ui/core";
import { data } from "../../data/skillsData";
import Heading from "../Heading";

const Skills = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Heading value="Skills" />
      </Grid>

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
