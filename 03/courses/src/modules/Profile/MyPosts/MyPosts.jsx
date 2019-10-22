import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = () => (
  <div className={classes.items}>
    <form>
      <textarea required></textarea>
      <input type="submit" value="Send"/>
    </form>
    
    <Post
      message="Hehe boiiii"
      likeCount="10"
    />
    <Post
      message="First comment..."
      likeCount="30"
    />
  </div>
);

export default MyPosts;