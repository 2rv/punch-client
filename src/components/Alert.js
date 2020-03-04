import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';

import Text from './Text';

const AlertComponent = ({ tid, type, className }) => {
  if (!type) {
    type = 'error';
  }

  return (
    <Alert className={className} variant="outlined" severity={type}>
      <Text tid={tid} />
    </Alert>
  );
};

AlertComponent.propTypes = {
  tid: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default AlertComponent;
