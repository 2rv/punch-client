import { validator, requiredObjectArray, required, email, phone, name } from './index';
import { USER_REQUEST, USER_REQUEST_LIST } from '../constants/fields';

const config = {
  [USER_REQUEST_LIST]: [requiredObjectArray],
};

export const validate = (values) => validator(values, config);

export const fieldListValidation = [requiredObjectArray];

export const fieldsValidation = {
  [USER_REQUEST.NAME]: [required, name],
  [USER_REQUEST.EMAIL]: [required, email],
  [USER_REQUEST.PHONE]: [required, phone],
  [USER_REQUEST.ID]: [required],
};
