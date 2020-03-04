import React from 'react';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

const SecondaryOutlinedChip = ({ className, label }) => {
  return <Chip variant="outlined" color="secondary" className={className} label={label} />;
};

SecondaryOutlinedChip.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default SecondaryOutlinedChip;
