import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import cplusplus from "../images/cplusplus.png";
import html from "../images/html5.jpg";
import css from "../images/CSS3.png";
import StarRating from "./StarRating";
import javascript from "../images/javascript.png";
import react from "../images/react.png";
import redux from "../images/redux.svg";

const Technologies = () => {
  const classes = useStyles();

  const skills = [
    {
      year: "2010",
      src: cplusplus,
      title: "C++ Logic",
      stars: 4,
    },
    {
      year: "2015",
      src: html,
      title: "HTML 5",
      stars: 5,
    },
    {
      year: "2018",
      src: css,
      title: "CSS 3",
      stars: 4,
    },
    {
      year: "2019",
      src: javascript,
      title: "Javascript ES6",
      stars: 4,
    },
    {
      year: "2020",
      src: react,
      title: "React js",
      stars: 5,
    },
    {
      year: "2020",
      src: redux,
      title: "React Redux",
      stars: 4,
    },
  ];

  return (
    <Timeline align="left">
      {skills.map(({ year, src, title, stars }, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="h6" color="textSecondary">
              {year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <img src={src} alt={title} className={classes.customlogo} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {title}
              </Typography>
              <StarRating stars={stars} />
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  customlogo: {
    width: "25px",
    objectFit: "cover",
  },
}));

export default Technologies;
