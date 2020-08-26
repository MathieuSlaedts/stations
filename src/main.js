import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Axios
import Axios from "axios";
Vue.prototype.$axios = Axios;

// Buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");