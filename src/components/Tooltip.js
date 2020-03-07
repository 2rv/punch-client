import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import TooltipMaterial from '@material-ui/core/Tooltip';

const Tooltip = ({
  tid,
  children,
  arrow = true,
  disableFocusListener = true,
  disableTouchListener = true,
  placement = 'bottom',
}) => {
  const { t } = useTranslation();

  return (
    <TooltipMaterial
      disableFocusListener={disableFocusListener}
      disableTouchListener={disableTouchListener}
      title={t(tid)}
      arrow={arrow}
      placement={placement}
    >
      {children}
    </TooltipMaterial>
  );
};

Tooltip.propTypes = {
  tid: PropTypes.string.isRequired,
  placement: PropTypes.string,
  children: PropTypes.node.isRequired,
  arrow: PropTypes.bool,
  disableFocusListener: PropTypes.bool,
  disableTouchListener: PropTypes.bool,
};

export default Tooltip;
