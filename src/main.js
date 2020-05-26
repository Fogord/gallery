import Vue from "vue";
// подключаем vuetify без стилей от vuetify
import Vuetify from "vuetify";
// подключаем router
import VueRouter from "vue-router";
// подключаем store (там только инфа о авторизованом пользователе, очен примитивно, сделано модульно)
import store from "./store";

// импортируем страницы
import App from "./App.vue";
import Auth from "./Auth.vue";
import Greetings from "./Greetings.vue";
import Gallery from "./Gallery.vue";

// импортируем middleware
import guest from "./route/middleware/guest";
import auth from "./route/middleware/auth";

// описываем маршруты
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

//инициализируем роутер с выстаавлеными путями
const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  // проверяем есть ли свойтсво у маршрута
  if (!to.meta.middleware) {
    return next();
  }
  // свойство найдено
  const middleware = to.meta.middleware;
  // создаем необходимы контекст для проверки в выставленном middleware в meta
  const context = {
    to,
    from,
    next,
    store
  };
  // так как у нас толкьо одина проверка, необходимо сделать конвеер проверок
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
