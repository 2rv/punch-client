import { redirect } from '../../utils/navigation';

import ROUTES from '../../constants/routes';
import { isLoaded } from '../../utils/store';

export default async (ctx) => {
  const { store, res } = ctx;

  const {
    userRequest: { data },
  } = await store.getState();

  if (!isLoaded(data)) {
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
