import React from 'react';
import './ProfileAvatar.css';

const ProfileAvatar = (props) => (
  <div>
    <img
      className="profileAvatar"
      src={props.image}
      alt="Profile Avatar"
    >
    </img>
    <div className="nameSection">
      <div className="nameSection-name">{props.name}</div>
      <div className="nameSection-tag">{props.tag}</div>
    </div>
  </div>
);

export default ProfileAvatar;
