import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Field from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import createComponent from '../../utils/createComponent';
import mapError from '../../utils/mapError';

const TextField = ({ className, endAdornment, children, label, ...props }) => {
  return (
    <FieldStyled
      InputProps={{
        endAdornment: endAdornment && <InputAdornment position="end">{endAdornment}</InputAdornment>,
      }}
      label={label}
      variant="outlined"
      className={className}
      {...props}
    >
      {children}
    </FieldStyled>
  );
};

const FieldStyled = styled(Field)`
  && {
    width: 100%;
  }
`;

TextField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  label: PropTypes.node,
  endAdornment: PropTypes.node,
};

export default createComponent(TextField, ({ defaultValue, ...props }) => mapError(props));
