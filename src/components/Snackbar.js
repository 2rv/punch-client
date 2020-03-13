import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import SnackbarComponent from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Snackbar = ({ active, onClose, tid }) => {
  const { t } = useTranslation();
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return null;
    }

    onClose(reason, false);
  };

  return (
    <SnackbarComponent
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={active}
      autoHideDuration={6000}
      onClose={handleClose}
      message={t(tid)}
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    />
  );
};

Snackbar.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  tid: PropTypes.string.isRequired,
};

export default Snackbar;
