function initRouter(routes) {
  return async (path, ctx) => {
    const routerHandler = routes[path] || null;

    if (routerHandler !== null) {
      await routerHandler(ctx);
    }
  };
}

export default initRouter;
