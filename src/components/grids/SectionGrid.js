import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

const SectionGrid = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: grid;
  grid-gap: ${sizes.spacing(5)};
  grid-template-columns: 1fr;
  grid-template-areas: '.';
`;

SectionGrid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionGrid;
