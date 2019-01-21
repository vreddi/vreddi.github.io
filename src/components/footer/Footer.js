import React from 'react';
import './Footer.css';
import * as seattleImg from '../../assets/seattleskyline.png';

const Footer = () => (
  <div className="footer">
    <img alt="Seattle" src={seattleImg} />
  </div>
);

export default Footer;
