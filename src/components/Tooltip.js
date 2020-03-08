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
  tvalues,
}) => {
  const { t } = useTranslation();

  return (
    <TooltipMaterial
      disableFocusListener={disableFocusListener}
      disableTouchListener={disableTouchListener}
      title={t(tid, tvalues)}
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
  tvalues: PropTypes.object,
  children: PropTypes.node.isRequired,
  arrow: PropTypes.bool,
  disableFocusListener: PropTypes.bool,
  disableTouchListener: PropTypes.bool,
};

export default Tooltip;
