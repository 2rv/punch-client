import { required, validator } from './index';
import { REFRESH_KEY } from '../constants/fields';

const config = {
  [REFRESH_KEY.OLD_KEY]: [required],
};

export const validate = (values) => validator(values, config);
