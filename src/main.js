import { createApp } from 'vue'
import store from "./store";
import App from "./components/App";

export default createApp(App).use(store).mount("#app");
