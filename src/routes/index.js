import ROUTES from '../constants/routes';

import initRouter from './router';

import { response, privated } from './redirects';

const routeSwitch = initRouter({
  [ROUTES.HISTORY]: [privated],
  [ROUTES.HOME]: [privated],
  [ROUTES.RESPONSE]: [privated, response],
});

export default async (ctx) => {
  await routeSwitch(ctx.pathname, ctx);
};
