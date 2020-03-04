import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

import { sizes } from '../theme';
import { scrollTo } from '../utils/navigation';

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    const { anchorId, offset } = props;

    scrollTo(anchorId, offset);
  };

  return (
    <Zoom in={trigger}>
      <Container onClick={handleClick} role="presentation">
        {children}
      </Container>
    </Zoom>
  );
}

const Container = styled.div`
  position: fixed;
  left: ${sizes.contentPadding};
  bottom: ${sizes.contentPadding};
`;

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  anchorId: PropTypes.string.isRequired,
  offset: PropTypes.number,
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <ScrollTop {...props}>
      <Fab color="secondary" size="small">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  );
}
