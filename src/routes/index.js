import ROUTES from '../constants/routes';

import initRouter from './router';

import { privated } from './redirects';

const routeSwitch = initRouter({
  [ROUTES.ADMIN]: privated,
});

export default async (ctx) => {
  await routeSwitch(ctx.pathname, ctx);
};
