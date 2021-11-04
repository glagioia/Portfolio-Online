import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MyWork from "./Components/MyWork";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: { main: "#333" },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
        <About title="About Me" dark={true} id="about" />
        <Skills title="Skills" dark={false} id="skills" />
        <MyWork title="My Work" dark={true} id="work" />
        <Contact title="Get in Touch" dark={false} id="contact" />
      </div>
    </MuiThemeProvider>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
}));

export default App;
