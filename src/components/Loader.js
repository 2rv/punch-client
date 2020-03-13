import React from 'react';
import styled from 'styled-components';

import LinearProgress from '@material-ui/core/LinearProgress';

const Loader = () => {
  return <StyledLoader />;
};

const StyledLoader = styled(LinearProgress)`
  && {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999999;
  }
`;

export default Loader;
