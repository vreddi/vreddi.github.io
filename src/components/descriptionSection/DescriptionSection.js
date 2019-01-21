import React from 'react';
import './DescriptionSection.css';

const DescriptionSection = (props) => (
  <div className="descriptionSection">
    {props.children}
  </div>
);

export default DescriptionSection;