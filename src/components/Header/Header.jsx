import React from 'react';
import './Header.css';

const Header = (props) => (
  <div class="header">
    {props.children}
  </div>
);

export default Header;
