import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Gonzalo from "../images/GonzaloLagioia.jpg";
import pdf from "../images/CV-Gonzalo Lagioia-Version2.pdf";
import TypeWriterEffect from "react-typewriter-effect";

const About = ({ title, dark, id }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={Gonzalo}
            title="profilepic"
          />
          <CardContent className={classes.cardContent}>
            <TypeWriterEffect
              textStyle={{
                fontSize: "2rem",
                fontWeight: "700px",
                color: "#3b1eb1",
              }}
              startDelay={100}
              cursorColor="black"
              text="Hi, I am Gonzalo Lagioia"
              typeSpeed={100}
            />
            <TypeWriterEffect
              textStyle={{ fontSize: "1.2rem", fontWeight: "500px" }}
              startDelay={2500}
              cursorColor="#3b1eb1"
              text="And I am a FullStack Developer and Comic Book Designer"
              typeSpeed={100}
            />
            <Typography variant="h6" color="textSecondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.pdfButton}>
              <a href={pdf} download>
                Download CV
              </a>
            </Button>
          </CardActions>
        </Card>
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
    "& h3": {
      marginLeft: theme.spacing(3),
    },
    "& h4": {
      color: "tomato",
    },
  },
  card: {
    marginTop: theme.spacing(6),
    display: "flex",
    height: "70vh",
    position: "relative",
  },
  media: {
    width: "300px",
    height: "auto",
    objectFit: "cover",
    borderRadius: "10px",
    margin: theme.spacing(5),
  },
  cardContent: {
    position: "relative",
    marginTop: theme.spacing(3),
    "& h6": {
      marginTop: theme.spacing(5),
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },

  pdfButton: {
    position: "absolute",
    bottom: "5rem",
    right: "4rem",
    [theme.breakpoints.down("sm")]: {
      bottom: 10,
      right: "1rem",
    },
    backgroundColor: "#3b1eb1",
    padding: theme.spacing(3),
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      fontWeight: 900,
    },
    "& a:hover": {
      color: "#3b1eb1",
    },
  },
}));

export default About;
