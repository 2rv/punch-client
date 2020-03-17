import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Progress = ({ className, size }) => {
  return <CircularProgress size={size} className={className} />;
};

export default Progress;
