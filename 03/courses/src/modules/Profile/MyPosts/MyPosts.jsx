import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
  const PostToRender = props.postsData.map((post, key) => <Post key={key} message={post.message} likeCount={post.likeCount} />);

  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({ type: 'ADD-POST' });
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    const action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
    props.dispatch(action);
  }

  return (
    <>
      <form className={classes.post_new}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
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