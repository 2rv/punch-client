import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderLayout = ({ children, className }) => {
  return <Header className={className}>{children}</Header>;
};

HeaderLayout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

const Header = styled.header``;

export default HeaderLayout;
