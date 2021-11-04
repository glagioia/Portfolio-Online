import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Technologies from "./Technologies";

const Skills = ({ dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h4">My coding journey ...</Typography>
        <Technologies />
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectiondark: {
    background: "#333",
    color: "white",
  },
  sectioncontent: {
    maxWidth: "80vw",
    margin: "0 auto",
    padding: theme.spacing(5),
  },
}));

export default Skills;
