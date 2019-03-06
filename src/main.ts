import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import iView from "iview";
import "iview/dist/styles/iview.css";
import axios from "axios";
import Qs from "qs";

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.use(iView);

axios.defaults.baseURL = "/api";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
