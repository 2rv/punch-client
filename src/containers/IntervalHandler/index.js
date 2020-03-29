import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { getUserBalance } from '../../actions/auth';
import { UPDATE_INTERVAL } from '../../constants/routes';

class IntervalHandlerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null,
    };
  }

  componentDidMount() {
    const { dispatch, userBalance, logged } = this.props;

    if (logged) {
      this.updateInterval();
      dispatch(getUserBalance(userBalance));
    }
  }

  componentWillUnmount() {
    this.removeInterval();
  }

  updateInterval = () => {
    const { dispatch, userBalance } = this.props;
    const { intervalId } = this.state;

    if (intervalId) {
      clearInterval(intervalId);
    }

    const newIntervalId = setInterval(() => {
      dispatch(getUserBalance(userBalance));
    }, UPDATE_INTERVAL.GLOBAL_INTERVAL);

    this.setState({ intervalId: newIntervalId });
  };

  removeInterval = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  };

  render() {
    return <React.Fragment />;
  }
}

const mapStateToProps = ({
  auth: {
    logged,
    user: { balance },
  },
}) => ({
  userBalance: balance,
});

IntervalHandlerContainer.propTypes = {
  userBalance: PropTypes.number.isRequired,
  logged: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps))(IntervalHandlerContainer);
