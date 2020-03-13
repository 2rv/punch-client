import { redirect } from '../../utils/navigation';

import ROUTES from '../../constants/routes';

export default (ctx) => {
  const { res, auth } = ctx;

  if (auth === null || auth.isLoggedIn !== true) {
    if (res) {
      res.writeHead(302, {
        Location: ROUTES.LOGIN,
      });
      res.end();
    } else {
      redirect(ROUTES.LOGIN);
    }
  }
};
