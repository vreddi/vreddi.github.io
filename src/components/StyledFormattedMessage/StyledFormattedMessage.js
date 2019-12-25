import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

// Docs: https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
const StyledFormattedMessage = (props) => (
  <span className={props.className}>
    <FormattedMessage
      id={props.id}
      description={props.description}
      defaultMessage={props.defaultMessage}
      values={props.values}
    />
  </span>
);

StyledFormattedMessage.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  defaultMessage: PropTypes.string,
  className: PropTypes.string,
  values: PropTypes.object,
}

export default StyledFormattedMessage;