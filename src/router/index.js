import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import Auth from "../Auth.vue";
import Greetings from "../Greetings.vue";
import Gallery from "../Gallery.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      component: Auth,
      meta: {
        auth: false
      }
    },
    {
      path: "/greetings",
      component: Greetings,
      meta: {
        auth: true
      }
    },
    {
      path: "/gallery",
      component: Gallery,
      meta: {
        auth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters["auth/auth"]) {
    next({
      name: ""
    });
  } else {
    next();
  }
});

export default router;
