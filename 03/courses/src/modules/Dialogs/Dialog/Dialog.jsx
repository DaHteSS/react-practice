import React from 'react';
import classes from './Dialog.module.css';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => (
  <div className={`${classes.dialog} ${classes.active}`}>
    <NavLink to={`/dialogs/${props.id}`} activeClassName={classes.dialog_active} className={classes.name}>{props.name}</NavLink>
  </div>
);

export default Dialog;