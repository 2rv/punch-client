import React from 'react';

import Button from './ButtonRoot';

const ButtonDefault = ({ ...props }) => {
  return <Button variant="contained" {...props} />;
};

export default ButtonDefault;
