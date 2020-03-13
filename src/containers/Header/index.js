import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import AppBar from './AppBar';
import Header from './Header';

import { logOut } from '../../actions/login';

const HeaderContainer = ({ logged, headerPath, dispatch }) => {
  const handleLogOutAction = () => dispatch(logOut());

  return (
    <AppBar>
      <Header logOutAction={handleLogOutAction} logged={logged} activePath={headerPath} />
    </AppBar>
  );
};

const mapStateToProps = ({ navigation: { logged, headerPath } }) => ({
  logged,
  headerPath,
});

HeaderContainer.propTypes = {
  headerPath: PropTypes.string,
  logged: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps))(HeaderContainer);
