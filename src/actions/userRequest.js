import userData from '../mocks/userData';

import { USER_REQUEST } from '.';

const setFail = (message) => ({
  type: USER_REQUEST.FAIL,
  message,
});

const setSuccessData = (data) => ({
  type: USER_REQUEST.SUCCESS,
  data,
});

const setLoading = () => ({
  type: USER_REQUEST.LOADING,
});

export const sendUserRequest = () => (dispatch) => {
  dispatch(setLoading());
  return setTimeout(() => {
    return dispatch(setSuccessData(userData));
  }, 3000);
};
