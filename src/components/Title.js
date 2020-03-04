import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../theme';

import Text from './Text';

const Title = ({ className, tid }) => {
  return (
    <TitleStyled className={className}>
      <Text tid={tid} />
    </TitleStyled>
  );
};

const TitleStyled = styled.strong`
  display: block;
  font-weight: 400;
  font-size: 24px;
  color: #fff;
  margin-bottom: ${sizes.spacing.lg};
`;

Title.propTypes = {
  className: PropTypes.string,
  tid: PropTypes.string,
};

export default Title;
