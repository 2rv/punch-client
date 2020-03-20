import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Card } from '../../components/cards';
import { ResponseGrid } from '../../components/grids';
import { sizes } from '../../theme';
import { Divider, Text } from '../../components';

const CardList = ({ items }) => {
  return (
    <ResponseGrid>
      {items.map(({ block, createdDate }, itemIndex) => (
        <React.Fragment key={`item-${itemIndex}`}>
          <Item>
            {block.map(({ values }, blockIndex) => (
              <React.Fragment key={`block-${blockIndex}`}>
                <Block>
                  {values.map(({ key, value }, valueIndex) => (
                    <React.Fragment key={`value-${valueIndex}`}>
                      <Value>
                        <Text tid="HISTORY.LIST.CARD.VALUE" values={{ key, value }} />
                      </Value>
                    </React.Fragment>
                  ))}
                </Block>
                <Divider />
              </React.Fragment>
            ))}
            <Block>
              <Time>
                <Text tid="HISTORY.LIST.CARD.CREATED_DATE" values={{ createdDate }} />
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
  &:not(:last-of-type) {
    margin-right: ${sizes.spacing(3)};
  }
`;

const Time = styled.span`
  font-size: 14px;
  opacity: ${sizes.opacity.md};
`;

const Block = styled.span`
  font-size: 16px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &:not(:last-of-type) {
    margin-bottom: ${sizes.spacing(2)};
  }

  &:not(:first-of-type) {
    margin-top: ${sizes.spacing(2)};
  }
`;

const Item = styled(Card)`
  padding: ${sizes.spacing(3)};
  cursor: pointer;

  && {
    transition: opacity ${sizes.transition.sm};

    &:hover {
      opacity: ${sizes.opacity.md};
    }
  }
`;

CardList.propTypes = {};

export default CardList;
