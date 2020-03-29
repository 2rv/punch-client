import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import AppBar from './AppBar';
import Header from './Header';

const HeaderContainer = ({ logged, headerPath, userBalance }) => {
  return (
    <AppBar>
      <Header userBalance={userBalance} logged={logged} activePath={headerPath} />
    </AppBar>
  );
};

const mapStateToProps = ({
  navigation: { logged, headerPath },
  auth: {
    user: { balance },
  },
}) => ({
  logged,
  userBalance: balance,
  headerPath,
});

HeaderContainer.propTypes = {
  headerPath: PropTypes.string,
  logged: PropTypes.bool,
  userBalance: PropTypes.number.isRequired,
};

export default compose(connect(mapStateToProps))(HeaderContainer);
