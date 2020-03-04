import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, sizes } from '../../theme';
import Text from '../Text';

const OutlinedCard = ({ title, description, imagePath }) => {
  return (
    <Container>
      {imagePath && <Image src={imagePath} />}

      <Title>
        <Text tid={title} />
      </Title>

      <Description>
        <Text tid={description} />
      </Description>
    </Container>
  );
};

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5em;
  text-align: center;
`;

const Title = styled.span`
  font-size: 24px;
  font-family: Montserrat;
  font-weight: bold;
  margin-bottom: ${sizes.spacing.m};
  text-align: center;
`;

const Image = styled.img`
  margin-bottom: ${sizes.spacing.xl};
`;

const Container = styled.div`
  padding: ${sizes.spacing.xb};
  border: 1px solid ${colors.darkGrey};
  border-radius: ${sizes.spacing.s};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

OutlinedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
};

export default OutlinedCard;
