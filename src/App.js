import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import VideoCover from './components/videoCover/VideoCover';
import ContentArea from './components/contentArea/ContentArea';
import Footer from './components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Logo from './components/Logo/Logo';
import HeroImage from './components/HeroImage/HeroImage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Logo />
        <div class="content-container">
          <div class="social-container">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <HeroImage />
        </div>
      </div>
    );
  }
}

export default App;
