import React from 'react';
import classes from './Post.module.css';


const Post = (props) => (
  <div className={classes.item}>
    <div className={classes.avatar}></div>
    <span>{props.message}</span>
    <div className={classes.likes}>
      {props.likeCount}
      <img width="20" height="20" src={require('./../../../../img/like.svg')} alt="Like"/>
    </div>
  </div>
);

export default Post;