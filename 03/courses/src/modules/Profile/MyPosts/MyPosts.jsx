import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = () => (
  <div className={classes.items}>
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
);

export default MyPosts;