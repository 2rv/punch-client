import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fade, colors } from '../../theme';
import { APP_PAGE_ID } from '../../constants';

const PageLayout = ({ children, theme }) => {
  return (
    <Page theme={theme} id={APP_PAGE_ID}>
      {children}
    </Page>
  );
};

const Page = styled.div`
  animation: ${fade} 1s;

  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${colors.pageBackground};
`;

PageLayout.propTypes = {
  children: PropTypes.array.isRequired,
  theme: PropTypes.string,
};

export default PageLayout;
