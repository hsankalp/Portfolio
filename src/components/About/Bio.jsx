import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Phone, GetApp, Mail } from "@material-ui/icons";
import profileImage from "../../images/resume-profile.PNG";
import resume from "../../resume/resume.pdf";
import IconLabel from "../IconLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bio: {
    textAlign: "center"
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

const Bio = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.bio} container direction="column" spacing={2}>
      <Grid item>
        <img
          className={classes.profileImage}
          src={profileImage}
          alt="sankalp-heranjal"
        />
      </Grid>

      <Grid item>
        <Typography variant="h6" align="center">
          Hi, I'm Sankalp
        </Typography>
      </Grid>

      <Grid item>
        <Typography paragraph align="justify">
          I am a Software developer with experience developing User Interactive
          Web applications as well as Microservice based applications.
        </Typography>

        <Typography paragraph align="justify">
          In addition to my work experience, I hold a Master’s degree in
          Computer Science from Illinois Institute of Technology, Chicago.
        </Typography>

        <Typography paragraph align="justify">
          I am passionate about coding, and love solving technical problems.
        </Typography>

        <Typography paragraph align="justify">
          Apart from coding, I love traveling, trying new cuisines and making
          new connections. Check out my travel feed at{" "}
          <a
            href="https://www.instagram.com/sankalpheranjal"
            rel="noopener noreferrer"
            target="_blank"
          >
            @sankalpheranjal
          </a>
        </Typography>
      </Grid>

      <Grid item>
        <IconLabel
          icon={<Phone fontSize="inherit" />}
          label="773-240-4870"
          variant="body2"
          justify="center"
        />
      </Grid>

      <Grid item>
        <a href="mailto:sankalp.heranjal@gmail.com" target="_top">
          <IconLabel
            icon={<Mail fontSize="inherit" />}
            label="sankalp.heranjal@gmail.com"
            variant="body2"
            justify="center"
          />
        </a>
      </Grid>

      <Grid item>
        <a
          href={resume}
          download="sankalp-heranjal-resume"
          className={classes.saveResume}
        >
          <Button size="small" variant="outlined" color="primary">
            <IconLabel
              icon={<GetApp fontSize="inherit" />}
              label="See my Resume"
              variant="body2"
            />
          </Button>
        </a>
      </Grid>
    </Grid>
  );
};

export default Bio;
