import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import createComponent from '../../utils/createComponent';
import mapError from '../../utils/mapError';

export const createItems = (items, t) =>
  items.map(({ id, tid, name, value }) => (
    <MenuItem key={id} value={value}>
      {name || t(tid)}
    </MenuItem>
  ));

const SelectField = ({ className, label, items, helperText, placeholder, error, ...props }) => {
  const { t } = useTranslation();

  return (
    <FormControl variant="outlined" className={className} error={error}>
      <InputLabel>{label}</InputLabel>
      <Select {...props}>
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
        {createItems(items, t)}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.node,
};

export default createComponent(SelectField, ({ input: { ...inputProps }, ...props }) => ({
  ...mapError(props),
  ...inputProps,
}));
