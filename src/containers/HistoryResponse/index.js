import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getData } from '../../utils/store';
import ListContent from './Content';

const HistoryResponseContainer = ({ data }) => {
  return <ListContent />;
};

const mapStateToProps = ({ userRequest: { data } }) => ({
  // data: getData(data, {}),
});

HistoryResponseContainer.propTypes = {
  // data: PropTypes.object.isRequired,
};

export default compose(connect(mapStateToProps))(HistoryResponseContainer);
