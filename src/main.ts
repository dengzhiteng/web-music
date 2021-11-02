import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//ui
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 导航守卫 实现前端页面权限
const role = store.state.userInfo.role;
router.beforeEach((to: any, from: any, next: any) => {
  const permissions: any = to.meta && to.meta.permissions;
  if (!permissions || permissions.includes(role)) {
    next();
  } else {
    router.replace("/404");
  }
});

const app = createApp(App)
  .use(router)
  .use(Antd)
  .use(store)
  .mount("#app");
