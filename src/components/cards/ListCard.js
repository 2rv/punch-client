import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, sizes } from '../../theme';
import Text from '../Text';

const ListCard = ({ title, description, imagePath }) => {
  return (
    <Container>
      {imagePath && <Image src={imagePath} />}
      <Content>
        <Title>
          <Text tid={title} />
        </Title>
        <Description>
          <Text tid={description} />
        </Description>
      </Content>
    </Container>
  );
};

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5em;
`;

const Title = styled.span`
  font-size: 24px;
  font-family: Montserrat;
  font-weight: bold;

  margin-bottom: ${sizes.spacing.m};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Image = styled.img`
  @media all and (min-width: 481px) {
    margin-right: ${sizes.spacing.g};
  }

  @media all and (max-width: 480px) {
    margin-bottom: ${sizes.spacing.xl};
  }
`;

const Container = styled.div`
  padding: ${sizes.spacing.g};
  display: flex;
  border: 1px solid ${colors.darkGrey};

  @media all and (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  @media all and (min-width: 481px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

ListCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
};

export default ListCard;
