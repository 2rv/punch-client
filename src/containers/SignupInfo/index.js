import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Info from './Info';

const SignupInfoContainer = ({ hashKey }) => {
  return <Info hashKey={hashKey} />;
};

const mapStateToProps = ({ signup: { key: hashKey } }) => ({
  hashKey,
});

SignupInfoContainer.propTypes = {
  hashKey: PropTypes.string.isRequired,
};

export default compose(connect(mapStateToProps))(SignupInfoContainer);
