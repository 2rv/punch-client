import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { sizes } from '../../theme';

const SecondaryCheckbox = ({ checked, onChange, value, tid, ...props }) => {
  const { t } = useTranslation();

  return (
    <Container control={<Checkbox checked={checked} onChange={onChange} value={value} {...props} />} label={t(tid)} />
  );
};

const Container = styled(FormControlLabel)`
  && {
    transition: ${sizes.transition.default} opacity;
    margin: 0;

    &:hover {
      opacity: ${sizes.opacity.default};
    }
  }
`;

SecondaryCheckbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  tid: PropTypes.string,
};

export default SecondaryCheckbox;
