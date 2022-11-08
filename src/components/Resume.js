import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#d5dffe1A",
    minHeight: "100vh",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    backgroundColor: "#022B3A",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#fff #fff transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #fff #fff",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#022B3A",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#fff",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#E1E5F2",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#bfdbf7",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Resume
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Web3 Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Yaku (2022)
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Was responsible for adding new features to <Link color="inherit" href="https://www.yaku.ai/home" target="_blank" underline="always">Yaku's</Link> community dashboard allowing their NFT holders to have a hub for all things crypto on the Solana network. Features included staking of Yaku NFTs, wallet to wallet chat, and an NFT sniper tool for purchasing a Solana NFT at a given price automatically. Written in React and Rust.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Founder
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Chowtown (2020 - 2022)
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Created a plug and play web application for restaurants to produce and manage high quality digital menus (due to COVID) with branding, images, and a mobile friendly design. The application had a staff backend for managing the menu, a webpage for customers to land on after scanning a QR code, and an IOS app that launched via an <Link color="inherit" href="https://developer.apple.com/app-clips/" target="_blank" underline="always">app clip</Link> for a more native experience. Tech stack included Django (python), React, React Native, Docker, and AWS.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Fullstack Developer / Contractor
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Sacra (2019 - 2022)
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Worked with the founder of <Link color="inherit" href="https://apps.apple.com/id/app/sacra-app/id1491367581" target="_blank" underline="always">Sacra</Link> to build a mobile app focused on facilitating her communities' spiritual journey via guided rituals (audio) and content from experts in the field, among other features. Written in Django (python), React Native, Docker, and AWS. Also facilitated the handoff of the development to a dev shop after the MVP was complete by creating relevant documentation and providing training. 
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Head of Product and Engineering
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Native AI (2018 - 2022)
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Joined as the founding engineer of <Link color="inherit" href="https://www.gonative.ai/" target="_blank" underline="always">Native AI</Link>. Utilized Django (python), React, Aws, Docker, and CI pipelines to build out two seperate applications one serving the indoor farming space (pre company pivot) with managing their operations and the second serving small CPG companies with gathering consumer feedback by scrapping data off the internet and analyzing that data with Natural Language Processing and Machine Learning pipelines. Also functioned as the lead developer, managing 5 junior devs across various areas of the platform. 
          </Typography>
        </Box>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Fullstack Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Opensky (2018)
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Was responsible for maintaining, optimizing, and adding new features to a legacy software application for small ski resorts to digitize their online sales of tickets, ski lessons, and gear (think shopify for ski resorts) written in Flask (python) and hosted on Google Cloud Platform.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Data Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            GoSpotCheck (2016 - 2017)
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Leveraged Ruby, Python and SQL for one of GoSpotCheck's largest clients in order to facilitate new use cases of GoSpotCheck's product. Was responsible for maintaining a stand alone database which provided our client with custom insights into their business operations by querying millions of data points.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2015
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Data Analyst
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Dish Network (2015 - 2016)
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Managed ETL pipelines and created dashboards on Tableau for the Dish Network Sales Training department. Was responsible for generating queries that would allow upper management to drill into the departments 5 million dollar expenditure budget.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
