import userData from '../mocks/userData';
import { redirect } from '../utils/navigation';
import ROUTES from '../constants/routes';

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
  setTimeout(() => {
    dispatch(setSuccessData(userData));
    redirect(ROUTES.RESPONSE);
  }, 3000);
};
