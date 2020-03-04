import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

const ContentLayout = ({ children, className }) => {
  return <Content className={className}>{children}</Content>;
};

ContentLayout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${sizes.responsiveLayout};
`;

export default ContentLayout;
