import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DividerComponent from '@material-ui/core/Divider';

const Divider = ({ className }) => {
  return (
    <Container className={className}>
      <StyledDivider />
    </Container>
  );
};

Divider.propTypes = {
  className: PropTypes.string,
};

const StyledDivider = styled(DividerComponent)``;
const Container = styled.div``;

export default Divider;
