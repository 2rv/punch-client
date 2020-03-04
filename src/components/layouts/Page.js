import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { fade, colors } from '../../theme';
import { APP_PAGE_ID } from '../../constants';
import { PAGE_TYPE } from '../../constants/static';

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

  ${({ theme }) => {
    switch (theme) {
      case PAGE_TYPE.HOME:
        return css`
          background-color: ${colors.homeBackground};
        `;

      default:
        return css`
          background-color: ${colors.homeBackground};
        `;
    }
  }}
`;

PageLayout.propTypes = {
  children: PropTypes.array.isRequired,
  theme: PropTypes.string,
};

export default PageLayout;
