import Router from 'next/router';

const scrollToTop = (isScrollToTop) => {
  if (isScrollToTop) {
    window.scrollTo(0, 0);
  }
};

export const redirect = (pathname, config = {}) => {
  const { local = true, query, as = pathname, dynamic, params, scrollTop = true } = config;

  if (dynamic) {
    Router.push(pathname({}), pathname(params), { shallow: true, query: { ...query } }).then(() =>
      scrollToTop(scrollTop),
    );
  } else if (local) {
    Router.push({ pathname, as, query: { ...query }, shallow: true }).then(() => scrollToTop(scrollTop));
  } else {
    window.location.href = pathname;
  }
};

export const getQuery = (id) => {
  return Router.query[id] || null;
};

export const scrollTo = (elementId, offset = 0) => {
  return window.scrollBy({
    top: document.getElementById(elementId).offsetTop - document.documentElement.scrollTop - offset,
    behavior: 'smooth',
  });
};
