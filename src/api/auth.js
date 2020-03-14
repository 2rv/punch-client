import { AUTH_USER } from '../constants/fields';

export const performUserAuthData = (raw) => ({
  id: raw[AUTH_USER.ID],
  balance: raw[AUTH_USER.BALANCE],
  role: raw[AUTH_USER.ROLE],
  username: raw[AUTH_USER.USERNAME],
});
