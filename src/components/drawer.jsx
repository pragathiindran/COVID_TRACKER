import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import PublicRoundedIcon from "@material-ui/icons/PublicRounded";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
  list: {
    width: 260,
    backgroundColor: '#9FA8DA' 
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ background: "#ffff" }}>
        <br />
        <br />
        <ListItem button key={"covid-tracker"}>
          <ListItemIcon>
           
          </ListItemIcon>
          <ListItemText primary={"COVID TRACKER"} />
        </ListItem>
        <br />
        <br />
        <Divider />
        <NavLink to="/" className="sideBarItem">
          <ListItem button key={"Home"}>
            <ListItemIcon>{<HomeRoundedIcon fontSize="large" />}</ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </NavLink>
        
        <NavLink to="/global" className="sideBarItem">
          <ListItem button key={"Global"}>
            <ListItemIcon>
              {<PublicRoundedIcon fontSize="large" />}
            </ListItemIcon>
            <ListItemText primary={"Global"} />
          </ListItem>
        </NavLink>
        <NavLink to="/WHOGuidelinesPage" className="sideBarItem">
          <ListItem button key={"WHOGuidelinesPage"}>
            <ListItemIcon>{<CheckIcon fontSize="large" />}</ListItemIcon>
            <ListItemText primary={"WHO Guidelines"} />
          </ListItem>
        </NavLink>
        
        <NavLink to="/NewsPage" className="sideBarItem">
          <ListItem button key={"NewsPage"}>
            <ListItemIcon>{<ForumRoundedIcon fontSize="large" />}</ListItemIcon>
            <ListItemText primary={"News"} />
          </ListItem>
        </NavLink>

        
        <br />
        <h6
          style={{
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >

        </h6>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <span className="menuIcon" onClick={toggleDrawer(anchor, true)}>
            {
              <MenuRoundedIcon
                style={{ verticalAlign: "-0.65rem" }}
                fontSize="large"
              />
            }
          </span>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
