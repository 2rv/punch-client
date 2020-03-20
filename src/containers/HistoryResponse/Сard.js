import React from 'react';
import styled from 'styled-components';

import { Card } from '../../components/cards';
import { ResponseGrid } from '../../components/grids';
import { sizes } from '../../theme';
import { Divider } from '../../components';

const CardList = () => {
  return (
    <ResponseGrid>
      <Item>Name=Ivan, Email=ivankondrak@mail.com OR Name=Vanya Kondrak, VK_ID=ivankondrak</Item>
      <Item>
        Email=kondrakmail@mail.com Email=ivankondrak@mail.com OR Name=Vanya Kondrak, VK_ID=ivankondrak,
        Phone=+1234566774
      </Item>
      <Item>
        <Text>Email=ivankondrak@mail.com</Text>
        <Divider />
        <Text>Name=Vanya Kondrak, VK_ID=ivankondrak</Text>
        <Divider />
        <Text>Phone=+1234566774</Text>
        <Divider />
        <Text> Phone=+1531232132</Text>
      </Item>
    </ResponseGrid>
  );
};

const Text = styled.p`
  height: 38px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const Item = styled(Card)`
  padding: ${sizes.spacing(3)};
  font-size: 16px;
`;

CardList.propTypes = {};

export default CardList;
