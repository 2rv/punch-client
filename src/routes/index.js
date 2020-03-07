import ROUTES from '../constants/routes';

import initRouter from './router';

import { response } from './redirects';

const routeSwitch = initRouter({
  [ROUTES.RESPONSE]: response,
});

export default async (ctx) => {
  await routeSwitch(ctx.pathname, ctx);
};
