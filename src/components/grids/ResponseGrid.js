import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

const ResponseGrid = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: grid;
  grid-gap: ${sizes.spacing(3)};
  grid-template-columns: 1fr;
  grid-template-areas: '.';
`;

ResponseGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResponseGrid;
