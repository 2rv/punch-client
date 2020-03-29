import api from '../utils/request';
import URLS from '../constants/api';
import { HISTORY_PAYMENT } from '.';

const setFail = (message) => ({
  type: HISTORY_PAYMENT.FAIL,
  message,
});

const setSuccess = (data) => ({
  type: HISTORY_PAYMENT.SUCCESS,
  data,
});

const setLoading = () => ({
  type: HISTORY_PAYMENT.LOADING,
});

export const getHistoryPaymentList = () => (dispatch) => {
  dispatch(setLoading());

  return api
    .get(URLS.PAYMENT_HISTORY)
    .then(({ data }) => {
      return dispatch(setSuccess(data));
    })
    .catch(({ response: { data } }) => dispatch(setFail(data.message)));
};

export const updateHistoryPaymentList = () => (dispatch) => {
  dispatch(setLoading());

  api.get(URLS.CHECK_PAYMENT_BITCOIN).then(() =>
    api.get(URLS.STATUS_PAYMENT_BITCOIN).then(() =>
      api
        .get(URLS.PAYMENT_HISTORY)
        .then(({ data }) => {
          return dispatch(setSuccess(data));
        })
        .catch(({ response: { data } }) => dispatch(setFail(data.message))),
    ),
  );
};
