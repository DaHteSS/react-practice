import React from 'react';
import classes from './Sidebar.module.css';
import Navigation from './Navigation/Navigation.jsx';
import Friends from './Friends/Friends.jsx';


const Sidebar = (props) => (
  <div className={classes.sidebar}>
    <Navigation />
    <Friends friendsData={props.state.friendsData}/>
  </div>
);

export default Sidebar;