import api from '../utils/request';

import URLS from '../constants/api';

import { LOGIN_UPDATE } from '.';
import { convertLoginUpdateData } from '../api/loginUpdate';

const setFail = (message) => ({
  type: LOGIN_UPDATE.FAIL,
  message,
});

const setSuccessData = () => ({
  type: LOGIN_UPDATE.SUCCESS,
});

const setLoading = () => ({
  type: LOGIN_UPDATE.LOADING,
});

export const loginUpdateData = (payload) => (dispatch) => {
  dispatch(setLoading());

  const body = convertLoginUpdateData(payload);

  return api
    .patch(URLS.LOGIN_UPDATE, body)
    .then(() => dispatch(setSuccessData()))
    .catch(({ response: { data } }) => dispatch(setFail(data.message)));
};
