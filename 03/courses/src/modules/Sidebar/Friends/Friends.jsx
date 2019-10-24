import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend.jsx';


const Friends = (props) => {
  const FriendToRender = props.friendsData.map((friend, key) => <Friend key={key} name={friend.name} />);
  return (
    <div className={classes.friends}>
      <h2>Friends</h2>
      <div className={classes.friendItems}>
        {FriendToRender}
      </div>
    </div>
  );
}

export default Friends;