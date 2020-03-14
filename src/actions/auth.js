import * as jwtDecode from 'jwt-decode';
import { AUTH } from '.';
import { performUserAuthData } from '../api/auth';

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
