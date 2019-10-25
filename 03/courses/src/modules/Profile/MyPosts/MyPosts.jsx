import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
  const PostToRender = props.postsData.map((post, key) => <Post key={key} message={post.message} likeCount={post.likeCount} />);

  const newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;

    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <>
      <form className={classes.post_new}>
        <textarea required ref={newPostElement} />
        <input onClick={addPost} type="button" value="Send" />
      </form>
      <div className={classes.items}>
        {PostToRender}
      </div>
    </>
  );
}

export default MyPosts;