import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

const SkeletonComponent = () => {
  return (
    <div>
      <Skeleton variant="rect" width="100%" height="200px" />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="50%" />
    </div>
  );
};

export default SkeletonComponent;
