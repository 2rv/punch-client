import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Card } from '../../components/cards';
import { ResponseGrid } from '../../components/grids';
import { sizes, colors } from '../../theme';
import { Divider, Text } from '../../components';

const CardList = ({ items }) => {
  return (
    <ResponseGrid>
      {items.map(({ id, confirm, amount, transaction, createDate }) => (
        <React.Fragment key={id}>
          <Item>
            <Block>
              <Value>
                <Text tid="HISTORY_PAYMENT.LIST.CARD.CONFIRM" />{' '}
                <Confirm status={confirm}>
                  {confirm ? (
                    <Text tid="HISTORY_PAYMENT.LIST.CARD.CONFIRM_TRUE" />
                  ) : (
                    <Text tid="HISTORY_PAYMENT.LIST.CARD.CONFIRM_FALSE" />
                  )}
                </Confirm>
              </Value>
            </Block>
            <Divider />
            <Block>
              <Value>
                <Text tid="HISTORY_PAYMENT.LIST.CARD.AMOUNT" values={{ amount }} />
              </Value>
            </Block>
            <Divider />
            <Block>
              <Value>
                <Text tid="HISTORY_PAYMENT.LIST.CARD.TRANSACTION" />{' '}
                <Link href={`https://blockchain.info/tx/${transaction}`} target="_blank">
                  {transaction}
                </Link>
              </Value>
            </Block>
            <Divider />
            <Block>
              <Time>
                <Text tid="HISTORY_PAYMENT.LIST.CARD.CREATED_DATE" values={{ createDate }} />
              </Time>
            </Block>
          </Item>
        </React.Fragment>
      ))}
    </ResponseGrid>
  );
};

CardList.propTypes = {
  items: PropTypes.array.isRequired,
};

const Value = styled.span`
  font-size: 16px;
  width: 100%;
`;

const Confirm = styled(Value)`
  color: ${(p) => (p.status ? colors.success : colors.error)};
`;

const Link = styled(Value)`
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  line-break: strict;
  -webkit-hyphens: auto;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  transition: opacity ${sizes.transition.md};

  &:hover {
    opacity: ${sizes.opacity.md};
  }
`.withComponent('a');

const Time = styled(Value)`
  font-size: 14px;
  opacity: ${sizes.opacity.md};
`;

const Block = styled.span`
  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(1)};
  }

  &:not(:first-of-type) {
    margin-top: ${sizes.spacing(1)};
  }
`;

const Item = styled(Card)`
  padding: ${sizes.spacing(3)};
`;

CardList.propTypes = {};

export default CardList;
