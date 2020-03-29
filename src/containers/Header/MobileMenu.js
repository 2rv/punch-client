import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { sizes } from '../../theme';
import { redirect } from '../../utils/navigation';
import { Text } from '../../components';

const MobileMenu = ({ activePath, items }) => {
  const [active, setActive] = React.useState(false);

  const toggleDrawer = (status) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setActive(status);
  };

  const handleClick = (path) => () => {
    redirect(path);
    setActive(false);
  };
  return (
    <Menu>
      <IconButton size="small" onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="medium" />
      </IconButton>
      <Drawer open={active} onClose={toggleDrawer(false)}>
        <List style={{ width: 200 }}>
          {items.map(({ id, path, tid }) => (
            <ListItem button key={id} selected={path === activePath} onClick={handleClick(path)}>
              <ListItemText primary={<Text tid={tid} />} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Menu>
  );
};

const Menu = styled.nav`
  padding: ${sizes.spacing(3)} 0;
`;

MobileMenu.propTypes = {
  activePath: PropTypes.bool,
  items: PropTypes.array.isRequired,
};

export default MobileMenu;
