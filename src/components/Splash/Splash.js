import React from 'react';
import StyledFormattedMessage from '../StyledFormattedMessage/StyledFormattedMessage';

import './Splash.css';

const Splash = () => (
  <div className="splash">
    <div className="splash-hello-container">
    <StyledFormattedMessage
      id="splash.hello"
      defaultMessage="Hello"
      className="splash-hello"
    />
    <div className="splash-secondary-container">
      <hr className="splash-hr" />
      <StyledFormattedMessage
        id="splash.quote"
        defaultMessage="Hello"
        className="splash-quote"
      />
    </div>
    </div>
  </div>
);

export default Splash;
