import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import solana from "../images/solana.jpeg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#d5dffe80",
    minHeight: "100vh",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Solana NFT",
    description: `A fullstack NFT minting application using Metaplex's NFT protocol.`,
    stack: ['Anchor (Rust)', 'Typescript'],
    image: solana,
    demoUrl: "https://alexanderlukens.github.io/resume-nft/",
    githubUrl: "https://github.com/alexanderlukens/resume-nft"
  },
];

const Portfolio = () => {
  const classes = useStyles();

  const navigate = (url) => {
    window.open(url)
  }

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" gutterBottom>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component='div'>
                    Stack
                  </Typography>
                  {project.stack.map(s => (
                    <Typography variant="subtitle" color="textSecondary" component='div'>
                      &#x2022; {s}
                    </Typography>
                  ))}
                </CardContent>
              </CardActionArea>
              <CardActions>
                {project.demoUrl && 
                  <Button size="small" color="primary" onClick={() => navigate(project.demoUrl)}>
                    Live Demo
                  </Button>
                }
                {project.githubUrl && 
                  <Button size="small" color="primary" onClick={() => navigate(project.githubUrl)}>
                    Github Repo
                  </Button>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
