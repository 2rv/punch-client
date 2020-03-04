import { getCookie } from '../../utils/cookie';
import { redirect } from '../../utils/navigation';

import { COOKIE_AUTH } from '../../constants';
import ROUTES from '../../constants/routes';

export default (ctx) => {
  const auth = getCookie(COOKIE_AUTH, ctx);
  const { res } = ctx;

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
