import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

// <Skeleton variant="rect" width="100%" height="200px" />

const SkeletonComponent = ({ ...props }) => <Skeleton {...props} />;

export default SkeletonComponent;
