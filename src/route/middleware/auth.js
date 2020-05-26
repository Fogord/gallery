export default function auth({ next, store }) {
  if (!store.getters["auth/auth"]) {
    return next({
      name: ""
    });
  }

  return next();
}
