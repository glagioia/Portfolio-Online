import {
  Button,
  makeStyles,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React, { useState } from "react";

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  const [value, setValue] = useState("Say Hi");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h4">{title}</Typography>
        <Paper className={classes.root}>
          <div className={classes.titlenadchoices}>
            <Typography variant="h5">CONTACT ME</Typography>
            <div className={classes.choices}>
              <span>Say Hello</span>{" "}
              <Radio
                value="Say Hi"
                checked={value === "Say Hi"}
                onChange={handleChange}
                color="primary"
              />
              <span>Get a Quote</span>{" "}
              <Radio
                value="Get a Quote"
                checked={value === "Get a Quote"}
                onChange={handleChange}
                color="primary"
              />
            </div>
          </div>

          <form className={classes.form} noValidate autoComplete="off">
            <TextField label="Your name" />
            <TextField label="Your Email" />
            {value === "Get a Quote" ? (
              <>
                <TextField label="Needed Services " />
                <TextField label="Estimated budget" />
              </>
            ) : null}
            <TextField label="Write your message" />
          </form>
          <Button variant="contained">Submit</Button>
        </Paper>
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(5),
    "& h4": {
      marginBottom: theme.spacing(4),
    },
  },
  root: {
    background: "tomato",
    color: "#fff",
    fontSize: "1.2rem",
    maxWidth: "500px",
    height: "content-fit",
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: theme.spacing(4),
    "& button": {
      backgroundColor: "#fff",
      color: "tomato",
      fontWeight: 900,
      fontSize: "1.2rem",
      marginTop: theme.spacing(4),
    },
    "& button:hover": {
      backgroundColor: purple[500],
      color: "#fff",
    },
  },
  titlenadchoices: {
    "& h5": {
      textAlign: "center",
      fontWeight: 900,
      fontSize: "1.5rem",
      marginBottom: theme.spacing(3),
    },
  },
  choices: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    "& input": {
      marginBottom: theme.spacing(5),
    },
  },
}));

export default Contact;
