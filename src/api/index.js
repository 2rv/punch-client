import lang from 'i18next';
import { ADDITIONAL_FACTOR_TYPE, ADDITIONAL_FACTOR_VALUE_LIST } from '../constants/calc/factor';

export const getDateTime = (raw) => new Date(raw).toLocaleString();
export const getDate = (raw) => new Date(raw).toLocaleDateString();

export const getStatic = (value) => value && lang.t(`STATIC.${value}`);
