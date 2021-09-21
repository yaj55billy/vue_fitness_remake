import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import "bootstrap";
import router from "./router";
import store from "./store";

createApp(App)
  .use(axios)
  .use(store)
  .use(router)
  .mount("#app");
