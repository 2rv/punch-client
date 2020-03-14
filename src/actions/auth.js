import { AUTH } from '.';

export const setAuthData = (token) => {
  return (dispatch) =>
    dispatch({
      type: AUTH.SET_DATA,
      token,
      logged: !!token,
    });
};
