import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Countdown from 'react-countdown';
import QRCode from 'qrcode.react';

import { sizes, colors } from '../../theme';
import { Text } from '../../components';
import { CopyField } from '../../components/fields';

const OrderData = ({ address, expiration }) => {
  return (
    <Container>
      <Countdown
        date={Date.now() + expiration}
        renderer={({ hours, minutes, seconds, completed }) => {
          if (completed) {
            return (
              <Block>
                <WarnInfo>
                  <Text tid="PAYMENT.EXPIRATION_END" />
                </WarnInfo>
              </Block>
            );
          }

          return (
            <React.Fragment>
              <Block>
                <Text tid="PAYMENT.ORDER_ATTENTION" />
                <br />
                <TimeExpiration>
                  <Text tid="PAYMENT.ORDER_DATA.EXPIRATION" values={{ hours, minutes, seconds }} />
                </TimeExpiration>
              </Block>
              <Block>
                <Image>
                  <QRCode value={`bitcoin:${address}`} imageSettings={{ width: '100%', height: '600px' }} />
                </Image>
              </Block>
              <BlockAddress>
                <CopyField
                  size="medium"
                  value={address}
                  fieldTid="PAYMENT.ORDER_DATA.ADDRESS"
                  alertTid="ADDRESS_COPY_ALERT"
                />
              </BlockAddress>
            </React.Fragment>
          );
        }}
      />
    </Container>
  );
};

OrderData.propTypes = {
  address: PropTypes.string.isRequired,
  expiration: PropTypes.number.isRequired,
};

const Image = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TimeExpiration = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: ${sizes.spacing(1)};
`;

const WarnInfo = styled.div`
  color: ${colors.error};
`;

const Block = styled.div`
  font-size: 16px;
  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(2)};
  }
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
