import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Padding } from '../../components/layouts';
import { sizes } from '../../theme';
import ROUTES from '../../constants/routes';
import { Text } from '../../components';

import DesctopMenu from './DesctopMenu';
import MobileMenu from './MobileMenu';

const MENU_ITEMS = [
  { id: 0, tid: 'NAVIGATION.HEADER.REQUEST', path: ROUTES.HOME },
  { id: 2, tid: 'NAVIGATION.HEADER.HISTORY', path: ROUTES.HISTORY },
  { id: 4, tid: 'NAVIGATION.HEADER.PAYMENT', path: ROUTES.PAYMENT },
  { id: 3, tid: 'NAVIGATION.HEADER.SETTINGS', path: ROUTES.SETTINGS },
];

const Header = ({ activePath, userBalance }) => {
  return (
    <React.Fragment>
      <DesctopVersion>
        <Container>
          <DesctopMenu activePath={activePath} items={MENU_ITEMS} />
          {userBalance && (
            <BalanceInfo>
              <Text tid="NAVIGATION.INFO.BALANCE" values={{ balance: userBalance }} />
            </BalanceInfo>
          )}
        </Container>
      </DesctopVersion>
      <MobileVersion>
        <Container>
          <MobileMenu activePath={activePath} items={MENU_ITEMS} />
          {userBalance && (
            <BalanceInfo>
              <Text tid="NAVIGATION.INFO.BALANCE" values={{ balance: userBalance }} />
            </BalanceInfo>
          )}
        </Container>
      </MobileVersion>
    </React.Fragment>
  );
};

Header.propTypes = {
  activePath: PropTypes.bool,
  userBalance: PropTypes.number.isRequired,
};

const BalanceInfo = styled.div`
  font-size: 16px;
`;

const DesctopVersion = styled.div`
  @media all and (max-width: 1023px) {
    display: none;
  }
`;

const MobileVersion = styled.div`
  @media all and (min-width: 1024px) {
    display: none;
  }
`;

const Container = styled(Padding)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${sizes.contentPadding};
`;

export default Header;
