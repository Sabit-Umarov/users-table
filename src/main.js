import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueMask from "v-mask";
import Fragment from "vue-fragment";

Vue.use(Fragment.Plugin);
Vue.use(VueMask);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
