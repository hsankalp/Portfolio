import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import Heading from "../Heading";
import { data } from "../../data/projectsData";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  projects: {
    padding: "30px"
  }
});

const Projects = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.projects} container direction="column" spacing={2}>
      <Grid item>
        <Heading value="Work Projects" />
      </Grid>
      {data.map(project => (
        <Fragment key={project.name}>
          <Grid item>
            <Typography variant="h6" color="secondary">
              {project.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" align="justify">
              {project.description}
            </Typography>
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};

export default Projects;
