import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Padding } from '../../components/layouts';
import { sizes, colors } from '../../theme';
import { TextButton } from '../../components/buttons';
import ROUTES from '../../constants/routes';
import { Text } from '../../components';
import { redirect } from '../../utils/navigation';

const MENU_ITEMS = [
  { id: 0, tid: 'NAVIGATION.HEADER.REQUEST', path: ROUTES.HOME },
  { id: 2, tid: 'NAVIGATION.HEADER.HISTORY', path: ROUTES.HISTORY },
  { id: 3, tid: 'NAVIGATION.HEADER.SETTINGS', path: ROUTES.SETTINGS },
  { id: 4, tid: 'NAVIGATION.HEADER.PAYMENT', path: ROUTES.PAYMENT },
];

const Header = ({ activePath }) => {
  return (
    <Container>
      <Menu>
        {MENU_ITEMS.map(({ id, tid, path }) => (
          <React.Fragment key={id}>
            <MenuItem onClick={() => redirect(path)} active={path === activePath} size="medium">
              <Text tid={tid} />
            </MenuItem>
          </React.Fragment>
        ))}
      </Menu>
      {/* <TextButton size="medium" onClick={() => redirect(ROUTES.SETTINGS)}>
        <IconExit fontSize="medium" /> <Text tid="NAVIGATION.HEADER.LOGOUT" />
      </TextButton> */}
    </Container>
  );
};

Header.propTypes = {
  activePath: PropTypes.bool,
  logOutAction: PropTypes.func.isRequired,
};

const IconExit = styled(ExitToAppIcon)`
  margin-right: ${sizes.spacing(1)};
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(TextButton)`
  &:not(:last-of-type) {
    margin-right: ${sizes.spacing(2)};
  }

  && {
    color: ${(p) => p.active && colors.primary};
  }
`;

const Container = styled(Padding)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${sizes.spacing(2)} ${sizes.contentPadding};
`;

export default Header;
