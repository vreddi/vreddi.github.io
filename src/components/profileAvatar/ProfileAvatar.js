import React from 'react';
import './ProfileAvatar.css';

const ProfileAvatar = (props) => (
  <img
    className="profileAvatar"
    src={props.image}
    alt="Profile Avatar"
  >
  </img>
);

export default ProfileAvatar;
