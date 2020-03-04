import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

const Box = ({ className, children, onClick }) => {
  return (
    <PaperStyled onClick={onClick} className={className}>
      {children}
    </PaperStyled>
  );
};

const PaperStyled = styled(Paper)`
  && {
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: transparent;
    box-shadow: none;
  }
`;

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Box;
