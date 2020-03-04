import React from 'react';

import Button from './ButtonRoot';

const PrimaryOutlinedButton = ({ ...props }) => {
  return <Button variant="outlined" color="primary" {...props} />;
};

export default PrimaryOutlinedButton;
