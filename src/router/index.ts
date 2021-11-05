import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 公共页面 ，
const comRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home/discover",
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
    component: () => import("@/views/home/Index.vue"),
    meta: {
      permissions: ["admin", "editor"],
    },
    children: [
      {
        path: "discover",
        name: "discover",
        component: () => import("@/views/home/Discover.vue"),
      },
      {
        path: "album",
        name: "album",
        component: () => import("@/views/home/Album.vue"),
      },
      {
        path: "djradio",
        name: "djradio",
        component: () => import("@/views/home/Djradio.vue"),
      },
      {
        path: "playlist",
        name: "playlist",
        component: () => import("@/views/home/Playlist.vue"),
      },
      {
        path: "singer",
        name: "singer",
        component: () => import("@/views/home/Singer.vue"),
      },
      {
        path: "toplist",
        name: "toplist",
        component: () => import("@/views/home/Toplist.vue"),
      },
    ],
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
