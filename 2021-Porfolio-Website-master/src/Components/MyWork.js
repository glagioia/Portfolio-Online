import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import mockData from "../mockData";

const MyWork = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={classes.sectioncontent} id={id}>
        <Typography variant="h4">{title}</Typography>
        <Grid container className={classes.grid}>
          {mockData.map(({ image, link, title }, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.caratula}
                  image={image}
                  title="caratula"
                />
                <CardContent>
                  <Link
                    href={link}
                    color="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
    maxWidth: "90vw",
    margin: "0 auto",
    padding: theme.spacing(5),
  },
  grid: {
    marginTop: theme.spacing(10),
  },

  card: {
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(3),
  },
  caratula: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    objectFit: "contain",
  },
}));

export default MyWork;
