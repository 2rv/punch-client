import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Text = ({ tid, values, className }) => {
  const { t } = useTranslation();

  return <span className={className}>{t(tid, values)}</span>;
};

Text.propTypes = {
  tid: PropTypes.string.isRequired,
  className: PropTypes.string,
  values: PropTypes.object,
};

export default Text;
