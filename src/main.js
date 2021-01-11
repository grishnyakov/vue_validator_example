import Vue from "vue";
import Vuetify from "vuetify/lib";

import "@mdi/font/css/materialdesignicons.min.css"; // дополнительный набор иконок
import "./styles/overrides.scss";

import store from "./tools/store.js";
import router from "./tools/router.js";
import App from "./components/App";

Vue.use(Vuetify);

const opts = {
  theme: {
    customVariables: ["~/styles/variables.scss"],
    treeShake: true,
    themes: {
      light: {
        primary: "#2CB2DB",
        black: "#333333",
      },
    },
  },
  icons: { iconfont: "mdi" },
};

export default new Vue({
  el: "#app",
  components: { App },
  vuetify: new Vuetify(opts),
  router,
  store,
  template: "<App/>",
});
