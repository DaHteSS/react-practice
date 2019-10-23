import React from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';


const Navigation = () => (
  <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink className={classes.link} to="/profile" activeClassName={classes.active}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink className={classes.link} to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink className={classes.link} to="/feed" activeClassName={classes.active}>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink className={classes.link} to="/music" activeClassName={classes.active}>Music</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink className={classes.link} to="/settings" activeClassName={classes.active}>Settings</NavLink>
    </div>
  </nav>
);

export default Navigation;