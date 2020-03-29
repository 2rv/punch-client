import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createPaymentBitcoinAddress } from '../../actions/auth';

import Component from './Component';

const PaymentAddressContainer = ({ userBalance, dispatch, bitcoinPaymentAddress, isDataLoading }) => {
  const createBitcoinAddress = () => {
    dispatch(createPaymentBitcoinAddress());
  };

  return (
    <Component
      createBitcoinAddress={createBitcoinAddress}
      userBalance={userBalance}
      bitcoinPaymentAddress={bitcoinPaymentAddress}
      loading={isDataLoading}
    />
  );
};

const mapStateToProps = ({
  auth: {
    loading,
    user: { balance, bitcoinPaymentAddress },
  },
}) => ({
  userBalance: balance,
  bitcoinPaymentAddress,
  isDataLoading: loading,
});

PaymentAddressContainer.propTypes = {
  userBalance: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  bitcoinPaymentAddress: PropTypes.string,
  isDataLoading: PropTypes.bool,
};

export default compose(connect(mapStateToProps))(PaymentAddressContainer);
