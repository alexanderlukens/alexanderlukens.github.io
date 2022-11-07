import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
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
