import historyResponseData from '../mocks/historyResponseData';

import { HISTORY_RESPONSE } from '.';

const setFail = (message) => ({
  type: HISTORY_RESPONSE.FAIL,
  message,
});

const setSuccessData = (data) => ({
  type: HISTORY_RESPONSE.SUCCESS,
  data,
});

const setLoading = () => ({
  type: HISTORY_RESPONSE.LOADING,
});

export const getHistoryResponse = () => (dispatch) => {
  dispatch(setLoading());

  setTimeout(() => {
    dispatch(setSuccessData(historyResponseData));
  }, 3000);

  // .catch(({ response: { data } }) => dispatch(setFail(data.message)));
};
