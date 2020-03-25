import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Fluid, Responsive, Padding } from '../../components/layouts';
import { Card } from '../../components/cards';
import { OutlinedButton } from '../../components/buttons';
import { Divider, Text, Loader } from '../../components';
import { sizes } from '../../theme';

import OrderData from './OrderData';

const Component = ({ userBalance, createDisabled, createOrder, loading, loaded, data }) => {
  return (
    <Fluid>
      <Container>
        <Padding>
          <Content>
            {loading && <Loader />}
            <Block>
              <BalanceInfo>
                <Text tid="PAYMENT.USER_BALANCE" values={{ balance: userBalance }} />
              </BalanceInfo>
              <Divider />
            </Block>
            <Block>
              <OutlinedButton onClick={createOrder} disabled={createDisabled}>
                <Text tid="PAYMENT.CREATE_PAYMENT" values={{ balance: userBalance }} />
              </OutlinedButton>
            </Block>
            {loaded && (
              <Block>
                <Divider />
                <OrderDataBlock>
                  <OrderData {...data} />
                </OrderDataBlock>
              </Block>
            )}
          </Content>
        </Padding>
      </Container>
    </Fluid>
  );
};

Component.propTypes = {
  userBalance: PropTypes.number.isRequired,
  createDisabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
  data: PropTypes.object,
  createOrder: PropTypes.func.isRequired,
};

const OrderDataBlock = styled.div`
  margin-top: ${sizes.spacing(2)};
`;

const BalanceInfo = styled.div`
  font-size: 16px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(3)};
  }
`;

const Content = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: ${sizes.spacing(5)};
`;

const Container = styled(Responsive)`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Component;
