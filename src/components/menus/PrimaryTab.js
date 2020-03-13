import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useTranslation } from 'react-i18next';

const PrimaryTab = ({ active, action, items }) => {
  const { t } = useTranslation();

  return (
    <Tabs value={active} indicatorColor="primary" textColor="primary" variant="fullWidth" scrollButtons="on">
      {items.map(({ tid, id }) => (
        <React.Fragment key={id}>
          <Tab onClick={() => action(id)} label={t(tid)} />
        </React.Fragment>
      ))}
    </Tabs>
  );
};

PrimaryTab.propTypes = {
  active: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default PrimaryTab;
