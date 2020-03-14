import { required, validator, username } from './index';
import { LOGIN_UPDATE } from '../constants/fields';

const config = {
  [LOGIN_UPDATE.KEY]: [required],
  [LOGIN_UPDATE.USERNAME]: [username],
  [LOGIN_UPDATE.PASSWORD]: [],
};

export const validate = (values) => validator(values, config);
