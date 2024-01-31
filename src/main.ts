import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./samples/node-api";

/*****************************************************************************/
/* CSS */
/*****************************************************************************/
import './assets/primevue-sass-theme-3.47.2/themes/move-light/theme.scss';

// Plugins

const pinia = createPinia();

const app = createApp(App);

app.use(pinia).use(router);

router.isReady().then(() => {
  app.mount("#app").$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
});
