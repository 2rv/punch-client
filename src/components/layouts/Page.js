import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fade, colors, sizes } from '../../theme';
import { APP_PAGE_ID } from '../../constants';

const PageLayout = ({ align = 'top', children, theme }) => {
  return (
    <Page align={align} theme={theme} id={APP_PAGE_ID}>
      {children}
    </Page>
  );
};

const Page = styled.div`
  animation: ${fade} 1s;

  position: relative;
  min-height: 100vh;

  display: flex;
  justify-content: ${(p) => p.align};
  flex-direction: column;

  background-color: ${colors.pageBackground};
  padding: ${sizes.sectionOffsetSmall} 0;
`;

PageLayout.propTypes = {
  children: PropTypes.array.isRequired,
  theme: PropTypes.string,
  align: PropTypes.string,
};

export default PageLayout;
