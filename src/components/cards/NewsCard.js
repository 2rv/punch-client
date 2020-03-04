import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from '../Text';
import { sizes } from '../../theme';

const NewsCard = ({ imagePath, title, description, action }) => {
  return (
    <Container onClick={action}>
      <Image src={imagePath} />
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
  flex-grow: 1;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: ${sizes.spacing.s};
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: ${sizes.spacing.xl};
  border-radius: ${sizes.spacing.s};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform ${sizes.transition.default}, opacity ${sizes.transition.default};
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    opacity: ${sizes.opacity.default};
  }
`;

NewsCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default NewsCard;
