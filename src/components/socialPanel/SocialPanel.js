import React from 'react';
import './SocialPanel.css';

const SocialPanel = (props) => (
  <div className="social-panel">
    {props.children}
  </div>
);

export default SocialPanel;
