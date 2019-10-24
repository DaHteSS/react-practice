import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => (
  <div className={classes.profile_info}>
    <div className={classes.profile_bg}></div>
    <img width="50" height="50" src={require('./../../../img/avatar.jpg')} alt="Avatar" />
  </div>
);

export default ProfileInfo;