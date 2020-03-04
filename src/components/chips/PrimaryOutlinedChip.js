import React from 'react';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

const PrimaryOutlinedChip = ({ className, label }) => {
  return <Chip variant="outlined" color="primary" className={className} label={label} />;
};

PrimaryOutlinedChip.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default PrimaryOutlinedChip;
