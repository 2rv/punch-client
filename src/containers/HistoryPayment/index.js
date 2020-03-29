import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getData, isLoaded, isLoading, isError } from '../../utils/store';
import { getHistoryPaymentList, updateHistoryPaymentList } from '../../actions/historyPayment';
import { getUserBalance } from '../../actions/auth';
import { UPDATE_INTERVAL } from '../../constants/routes';

import ListContent from './Content';

class HistoryPaymentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
    };
  }

  componentDidMount() {
    const { dispatch, bitcoinPaymentAddress } = this.props;

    if (bitcoinPaymentAddress) {
      dispatch(getHistoryPaymentList());
      this.updateInterval();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      bitcoinPaymentAddress: bitcoinPaymentAddressCurrent,
      userBalance: userBalanceCurrent,
      dispatch,
    } = this.props;
    const { bitcoinPaymentAddress: bitcoinPaymentAddressPrev, userBalance: userBalancePrev } = prevProps;
    if (bitcoinPaymentAddressCurrent !== bitcoinPaymentAddressPrev) {
      dispatch(getHistoryPaymentList());
      this.updateInterval();
    }

    if (userBalanceCurrent !== userBalancePrev) {
      this.updateInterval();
    }
  }

  updateInterval = () => {
    const { dispatch, userBalance } = this.props;
    const { intervalId } = this.state;

    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      dispatch(updateHistoryPaymentList());
      dispatch(getUserBalance(userBalance));
    }, UPDATE_INTERVAL.HISTORY_PAYMENT);

    this.setState({ intervalId: newIntervalId });
  };

  updateData = () => {
    const { dispatch, userBalance } = this.props;
    this.updateInterval();
    dispatch(updateHistoryPaymentList());
    dispatch(getUserBalance(userBalance));
  };

  render() {
    const { data, isDataLoaded, isDataLoading, errorMessage, isDataError, bitcoinPaymentAddress } = this.props;

    if (!bitcoinPaymentAddress) {
      return null;
    }

    return (
      <ListContent
        data={data}
        updateData={this.updateData}
        loading={isDataLoading}
        loaded={isDataLoaded}
        errorMessage={errorMessage}
        error={isDataError}
      />
    );
  }
}

const mapStateToProps = ({
  historyPayment: { data, errorMessage },
  auth: {
    user: { bitcoinPaymentAddress, balance },
  },
}) => ({
  data: getData(data, []),
  isDataLoaded: isLoaded(data),
  isDataLoading: isLoading(data),
  isDataError: isError(data),
  errorMessage,
  bitcoinPaymentAddress,
  userBalance: balance,
});

HistoryPaymentContainer.propTypes = {
  data: PropTypes.object.isRequired,
  isDataLoaded: PropTypes.bool,
  isDataLoading: PropTypes.bool,
  isDataError: PropTypes.bool,
  errorMessage: PropTypes.string,
  userBalance: PropTypes.number.isRequired,
  bitcoinPaymentAddress: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps))(HistoryPaymentContainer);
