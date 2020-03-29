import * as jwtDecode from 'jwt-decode';
import { AUTH } from '.';
import { performUserAuthData } from '../api/auth';
import api, { setAutorization } from '../utils/request';
import URLS from '../constants/api';
import { logOut } from './login';

export const setAuthData = (token) => {
  const user = token ? performUserAuthData(jwtDecode(token)) : null;

  return (dispatch) =>
    dispatch({
      type: AUTH.SET_DATA,
      token,
      logged: !!token,
      user,
    });
};

const setLoaded = () => ({
  type: AUTH.LOADED,
});

export const refreshToken = () => {
  return (dispatch) =>
    api
      .get(URLS.REFRESH_TOKEN)
      .then(({ data }) => {
        setAutorization(data.accessToken);
        dispatch(setAuthData(data.accessToken));
        return dispatch(setLoaded());
      })
      .catch(() => logOut());
};

const setLoading = () => ({
  type: AUTH.LOADING,
});

export const createPaymentBitcoinAddress = () => (dispatch) => {
  dispatch(setLoading());

  return api
    .get(URLS.PAYMENT_CREATE_BITCOIN_ADDRESS)
    .then(() => {
      dispatch(refreshToken());
    })
    .catch(() => logOut());
};

export const getUserBalance = (balance) => (dispatch) => {
  return api
    .get(URLS.GET_USER_BALANCE)
    .then(({ data }) => {
      if (balance !== data.balance) {
        dispatch(refreshToken());
      }
    })
    .catch(() => logOut());
};
