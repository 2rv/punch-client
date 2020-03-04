import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

const FooterLayout = ({ children, offset = true, className }) => {
  return (
    <Footer offset={offset} className={className}>
      {children}
    </Footer>
  );
};

FooterLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  offset: PropTypes.string,
};

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: ${({ offset }) => (offset ? sizes.sectionOffsetSmall : 0)};
`;

export default FooterLayout;
