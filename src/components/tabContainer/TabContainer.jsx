import React from './node_modules/react';
import './TabContainer.css';

const TabContainer = (props) => (
  <div className="tab-container">
    {props.children}
  </div>
);

export default TabContainer;
