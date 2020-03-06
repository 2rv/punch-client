import { validator, required, email, phone, name, notRequired } from './index';
import { USER_REQUEST } from '../constants/fields';

const config = {
  [USER_REQUEST.NAME]: [notRequired(name)],
  [USER_REQUEST.EMAIL]: [notRequired(email)],
  [USER_REQUEST.PHONE]: [notRequired(phone)],
  [USER_REQUEST.ID]: [required],
};

export const validate = (values) => validator(values, config);
