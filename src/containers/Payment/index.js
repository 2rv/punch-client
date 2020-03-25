import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createPaymentOrder } from '../../actions/payment';
import { isLoading, isLoaded, getData } from '../../utils/store';

import Component from './Component';

const PaymentContainer = ({ userBalance, dispatch, userId, data, isDataLoaded, isDataLoading }) => {
  const [created, setCreated] = React.useState(false);

  const createOrder = () => {
    dispatch(createPaymentOrder({ id: userId }));
    setCreated(true);
  };

  return (
    <Component
      createOrder={createOrder}
      createDisabled={created}
      userBalance={userBalance}
      loaded={isDataLoaded}
      loading={isDataLoading}
      data={data}
    />
  );
};

const mapStateToProps = ({
  auth: {
    user: { balance, id },
  },
  payment: { data },
}) => ({
  userBalance: balance,
  userId: id,
  isDataLoaded: isLoaded(data),
  isDataLoading: isLoading(data),
  data: getData(data),
});

PaymentContainer.propTypes = {
  userBalance: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool,
  isDataLoading: PropTypes.bool,
  data: PropTypes.object,
};

export default compose(connect(mapStateToProps))(PaymentContainer);
