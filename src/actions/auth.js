import { AUTH } from '.';

export const setAuthData = (auth = null) => {
  return (dispatch) =>
    dispatch({
      type: AUTH.SET_DATA,
      auth,
      logged: !!auth,
    });
};
