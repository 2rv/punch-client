import React from 'react';

import Button from './ButtonRoot';

const OutlinedButton = ({ ...props }) => {
  return <Button variant="outlined" {...props} />;
};

export default OutlinedButton;
