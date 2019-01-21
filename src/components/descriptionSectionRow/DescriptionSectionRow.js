import React from 'react';
import './DescriptionSectionRow.css';

const DescriptionSectionRow = (props) => (
  <span className="descriptionSectionRow">
    {props.title + ' '}
    <a
      target="_blank"
      href={props.link}
      rel="noopener noreferrer"
    >
      {props.themeTitle + ' '}
    </a>
    <img src={props.image} alt={props.themeTitle} />
    {props.titleEnding ? ' ' + props.titleEnding : ''}
  </span>
);

export default DescriptionSectionRow;
