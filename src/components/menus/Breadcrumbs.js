import React from 'react';
import BreadcrumbsComponent from '@material-ui/core/Breadcrumbs';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Text from '../Text';

const Breadcrumbs = ({ className, active, items, action }) => {
  return (
    <BreadcrumbsComponent className={className} aria-label="breadcrumb">
      {items.map(({ path, name, id }) => (
        <Item key={id} isActive={path === active} onClick={() => action(path)}>
          <Text tid={name} />
        </Item>
      ))}
    </BreadcrumbsComponent>
  );
};

const Item = styled.span`
  text-decoration: ${(p) => (p.isActive ? 'none' : 'underline')};
`;

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  active: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
};

export default Breadcrumbs;
