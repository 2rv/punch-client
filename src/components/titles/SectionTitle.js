import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../Text';

import { sizes } from '../../theme';

const SectionTitle = ({ title, subTitle, center }) => {
  return (
    <Container center={center}>
      <Title>
        <Text tid={title} />
      </Title>
      <SubTitle>
        <Text tid={subTitle} />
      </SubTitle>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${(p) => (p.center ? 'center' : 'flex-start')};
  flex-direction: column;
  text-align: ${(p) => (p.center ? 'center' : 'left')};

  margin-bottom: ${sizes.spacing.xg};
`;

const Title = styled.span`
  font-family: 'Montserrat';
  font-weight: bold;
  margin-bottom: ${sizes.spacing.s};
  color: #fff;

  @media all and (max-width: 480px) {
    font-size: 27px;
  }

  @media all and (min-width: 481px) {
    font-size: 36px;
  }
`;

const SubTitle = styled.span`
  color: #fff;

  @media all and (max-width: 480px) {
    font-size: 18px;
  }

  @media all and (min-width: 481px) {
    font-size: 16px;
  }
`;

SectionTitle.defaultProps = {
  center: true,
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

export default SectionTitle;
