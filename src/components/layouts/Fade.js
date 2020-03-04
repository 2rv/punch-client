import React from 'react';
import styled, { css } from 'styled-components';
import InViewMonitor from 'react-inview-monitor';
import PropTypes from 'prop-types';

const Fade = ({ children, ...props }) => {
  let isRendered = false;

  const Layout = styled.div`
    transition: 1s;
    ${({ isLoaded }) => {
      if (isRendered || isLoaded) {
        return css`
          opacity: 1;
        `;
      }

      isRendered = true;
      return css`
        opacity: 0;
      `;
    }}
  `;

  return (
    <InViewMonitor intoViewMargin="10px" childPropsInView={{ isLoaded: true }} toggleChildPropsOnInView>
      <Layout {...props}>{children}</Layout>
    </InViewMonitor>
  );
};

Fade.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Fade;
