import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes } from '../../theme';

const PaddingLayout = ({ children, className }) => {
  return <Padding className={className}>{children}</Padding>;
};

PaddingLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Padding = styled.div`
  padding-left: ${sizes.contentPadding};
  padding-right: ${sizes.contentPadding};
`;

export default PaddingLayout;
