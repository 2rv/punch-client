import api, { setAutorization } from '../utils/request';
import { redirect } from '../utils/navigation';
import { convertLoginData } from '../api/login';

import URLS from '../constants/api';
import ROUTES from '../constants/routes';
import { LOGIN } from '.';

export const logOut = () => {
  setAutorization(null);
  redirect(ROUTES.LOGIN);
};

const loginFail = (message) => ({
  type: LOGIN.FAIL,
  message,
});

const loginSuccess = (token) => ({
  type: LOGIN.SUCCESS,
  token,
});

export const login = (actionData) => {
  const payload = convertLoginData(actionData);

  return (dispatch) =>
    api
      .post(URLS.LOGIN, payload)
      .then(({ data }) => {
        setAutorization(data.accessToken);
        redirect(ROUTES.DASHBOARD);

        return dispatch(loginSuccess(data.accessToken));
      })
      .catch(({ response: { data } }) => dispatch(loginFail(data.message)));
};
