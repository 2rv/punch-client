import cookie from 'js-cookie';
import nextCookie from 'next-cookies';

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, {
      ...value,
      expires: 1,
    });
  }
};

export const getCookie = (key, ctx) => {
  return JSON.parse(nextCookie(ctx)[key] || null) || {};
};

export const getBrowserCookie = (key) => {
  if (process.browser) {
    return JSON.parse(cookie.get(key) || null) || {};
  }

  return {};
};
