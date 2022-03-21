import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/in-article',
    name: 'in-article',
    component: () => import(/* webpackChunkName: "in-article" */ '../views/InArticle.vue'),
  },
  {
    path: '/in-feed',
    name: 'in-feed',
    component: () => import(/* webpackChunkName: "in-feed" */ '../views/InFeed.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
})

export default router
