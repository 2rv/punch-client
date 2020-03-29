import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentLayout = ({ children, className, layout = 'medium' }) => {
  return (
    <Content layout={layout} className={className}>
      {children}
    </Content>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  layout: PropTypes.string,
};
const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  ${({ layout }) => {
    if (layout === 'medium') {
      return 'max-width: 1200px;';
    }

    if (layout === 'small') {
      return 'max-width: 700px;';
    }
  }}
`;

export default ContentLayout;
