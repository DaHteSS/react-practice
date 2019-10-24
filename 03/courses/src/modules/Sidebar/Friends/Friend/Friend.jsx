import React from 'react';
import classes from './Friend.module.css';


const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <div className={classes.avatar}></div>
      <span className={classes.name}>{props.name}</span>
    </div>
  );
}

export default Friend;