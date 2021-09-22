import { createApp } from "vue";
import App from "./App.vue";
import $ from "jquery";
import "bootstrap";
import router from "./router";
import store from "./store";

window.$ = $;

createApp(App)
  .use($)
  .use(store)
  .use(router)
  .mount("#app");
