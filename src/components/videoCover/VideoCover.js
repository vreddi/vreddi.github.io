import React from 'react';
import './VideoCover.css';
import * as coverVideo from './../../assets/videoplayback.mp4';

const VideoCover = (props) => (
  <video id="bgvid" playsInline autoPlay muted loop>
    <source src={coverVideo} type="video/mp4" />
  </video>

);

export default VideoCover;
