import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 公共页面 ，
const comRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/404",
    component: () => import("@/views/common/notFound.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

// 页面
const routes: Array<RouteRecordRaw> = [
  {
    path: "/discover",
    component: () => import("@/views/discover/index.vue"),
    meta: {
      permissions: ["admin"],
    },
  },
  {
    path: "/my",
    component: () => import("@/views/my/index.vue"),
    meta: {
      permissions: ["admin", "editor"],
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...comRoutes, ...routes],
});

// 导航守卫
const role = "admin";

router.beforeEach((to: any, from: any, next: any) => {
  const permissions: any = to.meta && to.meta.permissions;
  if (!permissions || permissions.includes(role)) {
    next();
  } else {
    router.push("/404");
  }
});

export default router;
