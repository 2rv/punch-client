import { validator } from './index';

const config = {};

export const validate = (values) => validator(values, config);
