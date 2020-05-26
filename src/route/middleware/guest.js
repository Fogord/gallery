export default function guest({ next, store }) {
  if (store.getters["auth/auth"]) {
    return next({
      name: "/greetings"
    });
  }

  return next();
}
