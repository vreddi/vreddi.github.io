import React from 'react';
import "./JumboName.css";

const JumboName = ({ firstName, lastName }) => (
  <div class="jumbo-name">
    <div class="jumbo-first-name">{firstName}</div>
    <div class="jumbo-last-name">{lastName}</div>
  </div>
);

export default JumboName;
