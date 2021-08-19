import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/discover'
  },
  {
    path: '/discover',
    component: () => import('../views/discover/index.vue')
  },
  {
    path: '/my',
    component: () => import('../views/my/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
