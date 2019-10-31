import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts
        postsData={props.state.postsData}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default Profile;