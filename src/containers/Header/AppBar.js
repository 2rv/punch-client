import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const HideAppBar = ({ children, ...props }) => {
  return (
    <HideOnScroll {...props}>
      <AppBar color="transparent">{children}</AppBar>
    </HideOnScroll>
  );
};

HideAppBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HideAppBar;
