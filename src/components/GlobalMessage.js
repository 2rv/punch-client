import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Padding, Fade } from './layouts';
import { colors } from '../theme';
import { Text } from '.';

const GlobalMessage = ({ title, subTitle }) => {
  return (
    <Fade>
      <Container>
        <Title>
          <Text tid={title} />
        </Title>
        {subTitle && (
          <SubTitle>
            <Text tid={subTitle} />
          </SubTitle>
        )}
      </Container>
    </Fade>
  );
};

GlobalMessage.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

const SubTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  font-size: 18px;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
`;

const Container = styled(Padding)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export default GlobalMessage;
