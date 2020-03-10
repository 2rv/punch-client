import ROUTES from '../constants/routes';

import initRouter from './router';

import { response, privated } from './redirects';

const routeSwitch = initRouter({
  [ROUTES.DASHBOARD]: response,
  [ROUTES.RESPONSE]: privated,
});

export default async (ctx) => {
  await routeSwitch(ctx.pathname, ctx);
};
