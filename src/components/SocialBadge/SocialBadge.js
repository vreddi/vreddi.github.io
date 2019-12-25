import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SocialBadge.css';

const SocialBadge = (props) => (
  <a target="_blank"
    rel="noopener noreferrer"
    href={props.link}
    className="social-badge"
    role="button"
  >
    <FontAwesomeIcon
      icon={props.faIcon}
      color={props.color}
      title={props.title}
      size={props.size}
    />
  </a>
);


SocialBadge.propTypes = {
  /**
   * Class name of the Font-Awesome icon.
   */
  faIcon: PropTypes.object,

  /**
   * Color of the Font-Awesome icon.
   */
  color: PropTypes.string,

  /**
   * On hover title of the Fone-Awesome icon.
   */
  title: PropTypes.string,

  /**
   * Fize of the Font-Awesome icon.
   */
  size: PropTypes.string,

  /**
   * On click re-direction link
   */
  link: PropTypes.string,
};

export default SocialBadge;
