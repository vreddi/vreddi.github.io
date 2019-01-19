import React from 'react';
import './ProfileAvatarContainer.css';

const ProfileAvatarContainer = (props) => (
  <div className="profileAvatarContainer">
    {props.children}
  </div>
);

export default ProfileAvatarContainer;
