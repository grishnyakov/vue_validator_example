import Vue from "vue";
import store from "./tools/store.js";
import App from "./components/App";


export default new Vue({
  el: "#app",
  components: { App },
  store,
  template: "<App/>",
});
