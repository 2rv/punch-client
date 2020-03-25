import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { TextField } from '.';
import { Snackbar, Text } from '../index';

const CopyField = ({ value, fieldTid, alertTid, size }) => {
  const [copied, setCopied] = React.useState(false);

  const onCopyKey = () => {
    setCopied(true);
  };

  return (
    <React.Fragment>
      <TextField
        size={size}
        value={value}
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <CopyToClipboard text={value} onCopy={onCopyKey}>
              <IconButton size="medium" edge="end">
                <FileCopyIcon fontSize="small" />
              </IconButton>
            </CopyToClipboard>
          </InputAdornment>
        }
        label={<Text tid={fieldTid} />}
      />
      <Snackbar tid={alertTid} active={copied} onClose={() => setCopied(false)} />
    </React.Fragment>
  );
};

CopyField.propTypes = {
  value: PropTypes.string.isRequired,
  fieldTid: PropTypes.string.isRequired,
  alertTid: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default CopyField;
