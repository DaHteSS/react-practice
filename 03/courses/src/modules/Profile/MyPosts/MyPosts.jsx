import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
  const PostToRender = props.postsData.map((post, key) => <Post key={key} message={post.message} likeCount={post.likeCount} />);

  return (
    <div className={classes.items}>
      <form>
        <textarea required></textarea>
        <input type="submit" value="Send" />
      </form>
      {PostToRender}
    </div>
  );
}

export default MyPosts;