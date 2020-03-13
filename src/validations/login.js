import { required, validator } from './index';
import { LOGIN } from '../constants/fields';

const config = {
  [LOGIN.KEY]: [required],
  [LOGIN.USERNAME]: [required],
  [LOGIN.PASSWORD]: [required],
};

export const validate = (values) => validator(values, config);
