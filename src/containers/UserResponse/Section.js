import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Text } from '../../components';

import { sizes } from '../../theme';

const Section = ({ data }) => {
  const { name, address, phone, id } = data;

  return (
    <Container>
      {id && (
        <Item>
          <Title>
            <Text tid="USER_RESPONSE.DATA.ID" />:
          </Title>
          <span>{id}</span>
        </Item>
      )}

      {name && (
        <Item>
          <Title>
            <Text tid="USER_RESPONSE.DATA.NAME" />:
          </Title>
          <span>{name}</span>
        </Item>
      )}

      {address && (
        <Item>
          <Title>
            <Text tid="USER_RESPONSE.DATA.ADDRESS" />:
          </Title>
          <span>{address}</span>
        </Item>
      )}

      {phone && (
        <Item>
          <Title>
            <Text tid="USER_RESPONSE.DATA.PHONE" />:
          </Title>
          <span>{phone}</span>
        </Item>
      )}
    </Container>
  );
};

Section.propTypes = {
  data: PropTypes.object.isRequired,
};

const Title = styled.span`
  margin-right: ${sizes.spacing(2)};
`;

const Item = styled.div`
  font-size: ${sizes.spacing(4)};
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Section;
