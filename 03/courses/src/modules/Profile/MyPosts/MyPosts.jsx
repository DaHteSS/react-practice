import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx'


const MyPosts = (props) => {
  const PostToRender = props.postsData.map((post, key) => <Post key={key} message={post.message} likeCount={post.likeCount} />);

  const newPostElement = React.createRef();

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <>
      <form className={classes.post_new}>
        <textarea onChange={onPostChange} required ref={newPostElement} value={props.newPostText} />
        <input onClick={props.addPost} type="button" value="Send" />
      </form>
      <div className={classes.items}>
        {PostToRender}
      </div>
    </>
  );
}

export default MyPosts;