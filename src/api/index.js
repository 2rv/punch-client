import lang from 'i18next';

export const getDateTime = (raw) => new Date(raw).toLocaleString();
export const getDate = (raw) => new Date(raw).toLocaleDateString();

export const getStatic = (value) => value && lang.t(`STATIC.${value}`);
