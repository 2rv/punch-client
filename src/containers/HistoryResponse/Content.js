import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { ListTitle } from '../../components/titles';
import { sizes } from '../../theme';

import SkeletonList from './Skeleton';
import CardList from './Сard';

const Content = () => {
  return (
    <Fluid>
      <Container>
        <Padding>
          <ListTitle tid="HISTORY.LIST.TITLE" />
          <SkeletonList />
          {/* <CardList /> */}
        </Padding>
      </Container>
    </Fluid>
  );
};

Content.propTypes = {
  // data: PropTypes.object.isRequired,
};

const Container = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Content;
