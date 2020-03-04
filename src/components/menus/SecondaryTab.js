import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sizes, colors } from '../../theme';

import Text from '../Text';

const SecondaryTab = ({ className, active, items, action }) => {
  return (
    <Container className={className}>
      {items.map(({ id, tid, value }) => (
        <React.Fragment key={id}>
          <Item onClick={() => action(value)} isActive={active === value}>
            <Text tid={tid} />
          </Item>
        </React.Fragment>
      ))}
    </Container>
  );
};

SecondaryTab.propTypes = {
  active: PropTypes.string,
  items: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const Item = styled.div`
  && {
    white-space: nowrap;
    width: auto;
    padding: ${sizes.spacing.l};
    font-size: 16px;
    display: flex;
    align-items: center;

    text-transform: none;
    color: ${(p) => p.isActive && colors.secondary};
    padding-bottom: ${sizes.spacing.s};
    border-bottom: 1px solid ${(p) => (p.isActive ? colors.secondary : 'transparent')};
    cursor: pointer;
    transition: opacity ${sizes.transition.default}, border-color ${sizes.transition.default},
      color ${sizes.transition.default}, background-color ${sizes.transition.default};

    &:hover {
      opacity: ${(p) => !p.isActive && sizes.opacity.default};
    }
  }
`;

const Container = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  height: 40px;
  display: flex;
  overflow-x: auto;
  width: 100%;
`;

export default SecondaryTab;
