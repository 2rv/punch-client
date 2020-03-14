import { LOGIN_UPDATE } from '../constants/fields';

export const convertLoginUpdateData = ({ key, username = null, password }) => {
  const data = {
    [LOGIN_UPDATE.KEY]: key,
  };

  if (username) {
    data[LOGIN_UPDATE.USERNAME] = username;
  }

  if (password) {
    data[LOGIN_UPDATE.PASSWORD] = password;
  }

  return data;
};

// export const performLoginUpdateData = (raw) => ({
//   key: raw[LOGIN.KEY],
//   newUsername: raw[LOGIN.USERNAME],
//   newPassword: raw[LOGIN.PASSWORD],
// });
