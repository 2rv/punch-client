import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { sizes, colors } from '../../theme';
import { TextButton } from '../../components/buttons';
import { Text } from '../../components';
import { redirect } from '../../utils/navigation';

const DesctopMenu = ({ activePath, items }) => {
  return (
    <Menu>
      {items.map(({ id, tid, path }) => (
        <React.Fragment key={id}>
          <MenuItem onClick={() => redirect(path)} active={path === activePath} size="medium">
            <Text tid={tid} />
          </MenuItem>
        </React.Fragment>
      ))}
    </Menu>
  );
};

DesctopMenu.propTypes = {
  activePath: PropTypes.bool,
  items: PropTypes.array.isRequired,
};

const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: ${sizes.spacing(3)} 0;
`;

const MenuItem = styled(TextButton)`
  &:not(:last-of-type) {
    margin-right: ${sizes.spacing(2)};
  }

  && {
    color: ${(p) => p.active && colors.primary};
  }
`;

export default DesctopMenu;
