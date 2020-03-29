import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Padding } from '../../components/layouts';
import { Card } from '../../components/cards';
import { OutlinedButton } from '../../components/buttons';
import { Divider, Text, Loader } from '../../components';
import { sizes } from '../../theme';

import OrderData from './OrderData';

const Component = ({ userBalance, createBitcoinAddress, loading, bitcoinPaymentAddress }) => {
  return (
    <Padding>
      <Content>
        {loading && <Loader />}
        <Block>
          <BalanceInfo>
            <Text tid="PAYMENT.USER_BALANCE" values={{ balance: userBalance }} />
          </BalanceInfo>
          <Divider />
        </Block>
        {!bitcoinPaymentAddress && (
          <Block>
            <OutlinedButton onClick={createBitcoinAddress}>
              <Text tid="PAYMENT.CREATE_ADDRESS" />
            </OutlinedButton>
          </Block>
        )}
        {bitcoinPaymentAddress && (
          <React.Fragment>
            <Block>
              <OrderDataBlock>
                <OrderData address={bitcoinPaymentAddress} />
              </OrderDataBlock>
            </Block>
          </React.Fragment>
        )}
      </Content>
    </Padding>
  );
};

Component.propTypes = {
  userBalance: PropTypes.number.isRequired,
  loading: PropTypes.bool,
  bitcoinPaymentAddress: PropTypes.string,
  createBitcoinAddress: PropTypes.func.isRequired,
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

export default Component;
