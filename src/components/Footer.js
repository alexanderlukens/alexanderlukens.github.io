import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#022B3A",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#FFFFFF",
      "&:hover": {
        fill: "#BFDBF7",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  const navigate = (url) => {
    window.open(url)
  }

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<GitHub />} className={classes.root} onClick={() => navigate('https://github.com/alexanderlukens/')}/>
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} onClick={() => navigate('https://www.linkedin.com/in/alexanderlukens/')} />
    </BottomNavigation>
  );
};
export default Footer;
