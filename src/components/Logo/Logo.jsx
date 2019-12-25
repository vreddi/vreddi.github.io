import React from 'react';
import logo0 from '../../assets/L0.png';
import logo1 from '../../assets/L1.png';
import logo2 from '../../assets/L2.png';
import logo3 from '../../assets/L3.png';
import './Logo.css';

class Logo extends React.Component{
  constructor(props) {
    super(props);
    this.images = [logo0, logo1, logo2, logo3, logo1, logo0];
    this.timeouts = [5000, 250, 250, 250, 250, 250];
    this.state = {
      image: this.images[0],
      index: 0,
    };

    this.setNextImage();
  }

  setNextImage = () => {
    setTimeout(() => {
      this.setState({
        image: this.images[this.state.index],
        index: (this.state.index + 1) % this.images.length,
      }, () => this.setNextImage());
    }, this.timeouts[this.state.index]);
  }

  render = () => (
    <img className="logo" src={this.state.image} alt="" />
  );
}

export default Logo;