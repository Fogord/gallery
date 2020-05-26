import Vue from "vue";
// import vuetify without styles
import Vuetify from "vuetify";
// import router
import VueRouter from "vue-router";
// import store (There is flag about sign in user only)
import store from "./store";

// import pages
import App from "./App.vue";
import Auth from "./Auth.vue";
import Greetings from "./Greetings.vue";
import Gallery from "./Gallery.vue";

// import middleware
import guest from "./route/middleware/guest";
import auth from "./route/middleware/auth";

// paths
const routes = [
  {
    path: "",
    component: Auth,
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/greetings",
    component: Greetings,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: "/gallery",
    component: Gallery,
    meta: {
      middleware: [auth]
    }
  }
];

//init router
const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  // check property at path obj
  if (!to.meta.middleware) {
    return next();
  }
  // property is
  const middleware = to.meta.middleware;
  // create context to check restriction in middleware
  const context = {
    to,
    from,
    next,
    store
  };

  return middleware[0]({
    ...context
  });
});

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
