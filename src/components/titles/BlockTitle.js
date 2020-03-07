import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

import { Text, Divider } from '../index';

const BlockTitle = ({ className, tid }) => {
  return (
    <Container className={className}>
      <Title>
        <Text tid={tid} />
      </Title>
      <Divider />
    </Container>
  );
};

const Title = styled.span`
  margin-bottom: ${sizes.spacing(1)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: ${sizes.spacing(4)};
  color: #fff;
  margin-bottom: ${sizes.spacing(2)};
`;

BlockTitle.propTypes = {
  className: PropTypes.string,
  tid: PropTypes.string,
};

export default BlockTitle;
