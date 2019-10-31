import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'

const MyPosts = (props) => {
  const PostToRender = props.postsData.map((post, key) => <Post key={key} message={post.message} likeCount={post.likeCount} />);

  const addPost = () => {
    props.addPostCreator();
  }

  const onPostChange = (e) => {
    const text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <>
      <form className={classes.post_new}>
        <textarea
          onChange={onPostChange}
          placeholder="Type smth..."
          value={props.newPostText}
          required
        />
        <input onClick={addPost} type="button" value="Send" />
      </form>
      <div className={classes.items}>
        {PostToRender}
      </div>
    </>
  );
}

export default MyPosts;