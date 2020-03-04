import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import createComponent from '../../utils/createComponent';
import mapError from '../../utils/mapError';

const TextField = ({ className, children, label, ...props }) => {
  return (
    <FormControl className={className} variant="outlined">
      <InputLabel>{label}</InputLabel>
      <OutlinedInput {...props} />
    </FormControl>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  label: PropTypes.node,
};

export default createComponent(TextField, ({ defaultValue, ...props }) => mapError(props));
