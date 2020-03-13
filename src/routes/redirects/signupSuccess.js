import { redirect } from '../../utils/navigation';

import ROUTES from '../../constants/routes';

export default async (ctx) => {
  const { store, res } = ctx;

  const {
    signup: { key },
  } = await store.getState();

  if (!key) {
    if (res) {
      res.writeHead(302, {
        Location: ROUTES.HOME,
      });
      res.end();
    } else {
      redirect(ROUTES.HOME);
    }
  }
};
