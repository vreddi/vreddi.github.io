import React from 'react';
import './ContentArea.css';

const ContentArea = (props) => (
  <div className="contentArea">
    {props.children}
  </div>
);

export default ContentArea;
