import React from 'react';
import './InnerContentArea.css';

const InnerContentArea = (props) => (
  <div className="innerContentArea">
    {props.children}
  </div>
);

export default InnerContentArea;
