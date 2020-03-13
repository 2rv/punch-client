import api, { setAutorization } from '../utils/request';
import { redirect } from '../utils/navigation';

import URLS from '../constants/api';
import ROUTES from '../constants/routes';
import { SIGNUP } from '.';

const signupFail = (message) => ({
  type: SIGNUP.FAIL,
  message,
});

const signupSuccess = (token, key) => ({
  type: SIGNUP.SUCCESS,
  token,
  key,
});

export const signup = () => {
  return (dispatch) =>
    api
      .post(URLS.SIGNUP)
      .then(({ data }) => {
        setAutorization(data.accessToken);
        redirect(ROUTES.SIGNUP_SUCCESS);

        return dispatch(signupSuccess(data.accessToken, data.key));
      })
      .catch(({ response: { data } }) => dispatch(signupFail(data.message)));
};
