import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 公共页面 ，
const comRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    component: () => import("@/views/login/Index.vue"),
  },
  {
    path: "/404",
    component: () => import("@/views/common/NotFound.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];
// 页面
const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: () => import("@/views/Home.vue"),
    meta: {
      permissions: ["admin", "editor"],
    },
  },
  {
    path: "/my",
    component: () => import("@/views/my/Index.vue"),
    meta: {
      permissions: ["admin", "editor"],
    },
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...comRoutes, ...routes],
});

export default router;
