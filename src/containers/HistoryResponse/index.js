import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getData, isLoaded, isLoading, isError } from '../../utils/store';
import { getHistoryResponse, updateHistoryResponse } from '../../actions/historyResponse';

import ListContent from './Content';

class HistoryResponseContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    return dispatch(getHistoryResponse());
  }

  render() {
    const { data, isDataLoaded, isDataLoading, errorMessage, isDataError } = this.props;

    return (
      <ListContent
        data={data}
        loading={isDataLoading}
        loaded={isDataLoaded}
        errorMessage={errorMessage}
        error={isDataError}
      />
    );
  }
}

const mapStateToProps = ({ historyResponse: { data, errorMessage } }) => ({
  data: getData(data, []),
  isDataLoaded: isLoaded(data),
  isDataLoading: isLoading(data),
  isDataError: isError(data),
  errorMessage,
});

HistoryResponseContainer.propTypes = {
  data: PropTypes.object.isRequired,
  isDataLoaded: PropTypes.bool,
  isDataLoading: PropTypes.bool,
  isDataError: PropTypes.bool,
  errorMessage: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps))(HistoryResponseContainer);
