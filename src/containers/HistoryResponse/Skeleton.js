import React from 'react';
import styled from 'styled-components';

import { Skeleton } from '../../components';
import { ResponseGrid } from '../../components/grids';
import { sizes } from '../../theme';

const SkeletonList = () => {
  return (
    <ResponseGrid>
      <Item variant="rect" height="80px" />
      <Item variant="rect" height="80px" />
      <Item variant="rect" height="80px" />
    </ResponseGrid>
  );
};

const Item = styled(Skeleton)`
  border-radius: ${sizes.spacing(1)};
`;

SkeletonList.propTypes = {};

export default SkeletonList;
