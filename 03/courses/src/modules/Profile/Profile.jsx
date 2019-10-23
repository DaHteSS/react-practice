import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';


const Profile = () => (
  <div>
    <div className={classes.bg}></div>
    <img width="50" height="50" src={require('./../../img/avatar.jpg')} alt="Avatar" />
    <MyPosts />
  </div>
);

export default Profile;