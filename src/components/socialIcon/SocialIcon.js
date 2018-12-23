import React, { Component } from 'react';
import $ from 'jquery';
import './SocialIcon.css';

class SocialIcon extends Component {

  constructor (props) {
    super();
    this.state = {
      isHovered: false,
      platformTitleStyle: { maxWidth: '0'},
      colorStyle: { color: props.baseColor }
    }
  }

  toggleHover = () => {
    const isHovered = !this.state.isHovered,
          baseColor = this.props.baseColor,
          hoverColor = this.props.hoverColor;

    this.setState({
      isHovered,
      platformTitleStyle: isHovered ?
                            { maxWidth: '10em' } :
                            { maxWidth: '0' },
      colorStyle: isHovered ?
                    { color: hoverColor } :
                    { color: baseColor }
    });
  }

  render = () => (
    <a className="socialIcon"
         onMouseEnter={this.toggleHover}
         onMouseLeave={this.toggleHover}
         style={this.state.colorStyle}
         href={this.props.link}
         rel="noopener noreferrer"
         target="_blank">
      <i className={this.props.iconClass} />
      <div className="platform-title"
           style={this.state.platformTitleStyle}>
          {this.props.title}
      </div>
    </a>
  )
}

export default SocialIcon;
