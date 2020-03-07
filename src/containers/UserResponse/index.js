import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getData } from '../../utils/store';
import Response from './Response';

const UserResponseContainer = ({ data }) => {
  return <Response data={data} />;
};

const mapStateToProps = ({ userRequest: { data } }) => ({
  data: getData(data, {}),
});

UserResponseContainer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps))(UserResponseContainer);
