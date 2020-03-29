import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import QRCode from 'qrcode.react';

import { sizes } from '../../theme';
import { Text } from '../../components';
import { CopyField } from '../../components/fields';

const OrderData = ({ address }) => {
  return (
    <Container>
      <Block>
        <Text tid="PAYMENT.ADDRESS_PAYMENT_INFO" />
      </Block>
      <Block>
        <Image>
          <QRCode value={`bitcoin:${address}`} imageSettings={{ width: '100%', height: '600px' }} />
        </Image>
      </Block>
      <BlockAddress>
        <CopyField size="medium" value={address} fieldTid="PAYMENT.ORDER_DATA.ADDRESS" alertTid="ADDRESS_COPY_ALERT" />
      </BlockAddress>
    </Container>
  );
};

OrderData.propTypes = {
  address: PropTypes.string.isRequired,
};

const Image = styled.div`
  display: flex;
  justify-content: flex-start;
  border: 5px solid #fff;
`;

const Block = styled.div`
  font-size: 16px;
  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(2)};
  }
  display: flex;
  justify-content: flex-start;
`;

const BlockAddress = styled(Block)`
  margin-top: ${sizes.spacing(2)};
`;

const Container = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default OrderData;
