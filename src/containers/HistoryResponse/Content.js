import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { ListTitle } from '../../components/titles';
import { Loader, Alert } from '../../components';

import SkeletonList from './Skeleton';
import CardList from './Сard';

const Content = ({ data, loading, loaded, error, errorMessage }) => {
  return (
    <Fluid>
      <Container>
        <Padding>
          <ListTitle tid="HISTORY.LIST.TITLE" />
          {loading && <SkeletonList />}
          {loading && <Loader />}

          {loaded && <CardList items={data} />}

          {error && <Alert tid={`ERROR.${errorMessage}`} />}
        </Padding>
      </Container>
    </Fluid>
  );
};

Content.propTypes = {
  data: PropTypes.object.isRequired,
  loaded: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
};

const Container = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Content;
