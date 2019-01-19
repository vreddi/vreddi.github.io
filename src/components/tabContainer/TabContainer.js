import React from 'react';
import './TabContainer.css';

const TabContainer = (props) => (
  <div className="tabContainer">
    {props.children}
  </div>
);

export default TabContainer;
