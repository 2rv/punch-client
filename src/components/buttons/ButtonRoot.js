import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const ButtonDefault = ({ className, size = 'large', children, disabled, variant, color, onClick, type }) => {
  return (
    <ButtonStyled
      type={type}
      size={size}
      onClick={onClick}
      variant={variant}
      color={color}
      disabled={disabled}
      className={className}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Button)``;

ButtonDefault.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default ButtonDefault;
