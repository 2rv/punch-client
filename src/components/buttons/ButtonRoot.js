import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

const ButtonDefault = ({ className, children, disabled, variant, color, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} variant={variant} color={color} disabled={disabled} className={className}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled(Button)`
  && {
    padding: 7px 14px;
  }
`;

ButtonDefault.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ButtonDefault;
