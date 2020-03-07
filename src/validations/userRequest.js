import { validator, required, email, phone, name } from './index';
import { USER_REQUEST } from '../constants/fields';

const config = {
  [USER_REQUEST.NAME]: [required, name],
  [USER_REQUEST.EMAIL]: [required, email],
  [USER_REQUEST.PHONE]: [required, phone],
  [USER_REQUEST.ID]: [required],
};

export const validate = (values) => validator(values, config);
