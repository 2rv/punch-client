import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value);
  }
};

export const getCookie = (key, ctx) => {
  return nextCookie(ctx)[key] || null;
};

export const getBrowserCookie = (key) => {
  if (process.browser) {
    return cookie.get(key) || null;
  }

  return {};
};
