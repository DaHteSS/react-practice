import React from 'react';
import classes from './Message.module.css';


const Message = (props) => (
  <div className={classes.message}>
    <span className={classes.message__text}>{props.message}</span>
  </div>
);

export default Message;