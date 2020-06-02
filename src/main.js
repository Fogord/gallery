import Vue from "vue";
// import vuetify without styles
import Vuetify from "vuetify";
import "normalize.css";
// import router
import router from "./router";
// import store (There is flag about sign in user only)
import store from "./store";

import App from "./App.vue";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
