import React from 'react';
import './NameSection.css';

const NameSection = (props) => (
  <div className="nameSection">
    <div className="nameSection-name">{props.name}</div>
    <div className="nameSection-tag">{props.tag}</div>
  </div>
);

export default NameSection;
