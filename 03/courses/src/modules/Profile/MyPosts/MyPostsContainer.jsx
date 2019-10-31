import React from 'react';
import Post from './Post/Post.jsx'
import { addPostCreator, updateNewPostTextCreator } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  const addPost = () => {
    props.dispatch(addPostCreator());
  }

  const onPostChange = (text) => {
    props.dispatch(updateNewPostTextCreator(text));
  }

  return <MyPosts updateNewPostText={onPostChange} addPost={addPost} />;
}

export default MyPostsContainer;