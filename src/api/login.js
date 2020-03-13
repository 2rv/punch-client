import { LOGIN } from '../constants/fields';

export const convertLoginData = ({ key, username, password }) => ({
  [LOGIN.KEY]: key || null,
  [LOGIN.USERNAME]: username || null,
  [LOGIN.PASSWORD]: password || null,
});
