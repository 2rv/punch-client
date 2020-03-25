import api, { setAutorization } from '../utils/request';
import { redirect } from '../utils/navigation';
import { convertPaymentOrderData } from '../api/payment';

import URLS from '../constants/api';
import ROUTES from '../constants/routes';

import { PAYMENT } from '.';

const setFail = (message) => ({
  type: PAYMENT.FAIL,
  message,
});

const setSuccessData = (data) => ({
  type: PAYMENT.SUCCESS,
  data,
});

const setLoading = () => ({
  type: PAYMENT.LOADING,
});

export const createPaymentOrder = (actionData) => {
  const payload = convertPaymentOrderData(actionData);

  return (dispatch) => {
    dispatch(setLoading());

    return api
      .post(URLS.PAYMENT, payload)
      .then(({ data }) => {
        return dispatch(setSuccessData(data));
      })
      .catch(({ response: { data } }) => dispatch(setFail(data.message)));
  };
};
