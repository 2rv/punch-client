import React from 'react';

import Button from './ButtonRoot';

const PrimaryButton = ({ ...props }) => {
  return <Button variant="contained" color="primary" {...props} />;
};

export default PrimaryButton;
