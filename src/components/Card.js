import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import { colors } from '../theme';

const Card = ({ className, children }) => {
  return <PaperStyled className={className}>{children}</PaperStyled>;
};

const PaperStyled = styled(Paper)`
  && {
    background-color: ${colors.boxBackground};
  }
`;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

export default Card;
