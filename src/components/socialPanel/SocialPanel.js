import React from 'react';
import './SocialPanel.css';

const SocialPanel = (props) => (
  <div className="socialPanel">
    {props.children}
  </div>
);

export default SocialPanel;
