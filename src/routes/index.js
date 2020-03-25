import ROUTES from '../constants/routes';

import initRouter from './router';

import { response, privated, signupSuccess } from './redirects';

const routeSwitch = initRouter({
  [ROUTES.HISTORY]: [privated],
  [ROUTES.PAYMENT]: [privated],
  [ROUTES.SETTINGS]: [privated],
  [ROUTES.HOME]: [privated],
  [ROUTES.RESPONSE]: [privated, response],
  [ROUTES.SIGNUP_SUCCESS]: [signupSuccess],
});

export default async (ctx) => {
  await routeSwitch(ctx.pathname, ctx);
};
