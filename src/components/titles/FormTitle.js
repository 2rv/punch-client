import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

import { Text, Divider } from '../index';

const Title = ({ className, tid }) => {
  return (
    <TitleStyled className={className}>
      <TextStyled tid={tid} />
      <Divider />
    </TitleStyled>
  );
};

const TextStyled = styled(Text)`
  margin-bottom: ${sizes.spacing(1)};
`;

const TitleStyled = styled.strong`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: ${sizes.spacing(6)};
  color: #fff;
  margin-bottom: ${sizes.spacing(4)};
`;

Title.propTypes = {
  className: PropTypes.string,
  tid: PropTypes.string,
};

export default Title;
