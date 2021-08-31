import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//ui
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App)
  .use(router)
  .use(Antd)
  .mount("#app");

// app.config.productionTip = false;
