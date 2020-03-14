import api from '../utils/request';

import URLS from '../constants/api';

import { REFRESH_KEY } from '.';

const setFail = (message) => ({
  type: REFRESH_KEY.FAIL,
  message,
});

const setSuccessData = (data) => ({
  type: REFRESH_KEY.SUCCESS,
  data,
});

const setLoading = () => ({
  type: REFRESH_KEY.LOADING,
});

export const refreshKey = ({ key }) => (dispatch) => {
  dispatch(setLoading());

  const payload = { key };

  return api
    .post(URLS.REFRESH_KEY, payload)
    .then(({ data }) => dispatch(setSuccessData(data)))
    .catch(({ response: { data } }) => dispatch(setFail(data.message)));
};
