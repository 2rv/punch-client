import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { TextPrimaryButton, TextButton } from '../buttons';

const InlineMenu = ({ className, items, active, action }) => {
  return (
    <Menu className={className}>
      {items.map(({ path, name, id }) => (
        <React.Fragment key={id}>
          {path === active ? (
            <TextPrimaryButton tid={name} onClick={() => action(path)} />
          ) : (
            <TextButton tid={name} onClick={() => action(path)} />
          )}
        </React.Fragment>
      ))}
    </Menu>
  );
};

const Menu = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  display: flex;
  justify-content: flex-start;
`;

InlineMenu.propTypes = {
  className: PropTypes.string,
  active: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
};

export default InlineMenu;
