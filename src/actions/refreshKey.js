import api, { setAutorization } from '../utils/request';
import { redirect } from '../utils/navigation';

import URLS from '../constants/api';
import ROUTES from '../constants/routes';

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
    .then(({ data }) => {
      setAutorization(data.accessToken);
      redirect(ROUTES.HOME);

      return dispatch(setSuccessData(data));
    })
    .catch(({ response: { data } }) => dispatch(setFail(data.message)));
};
