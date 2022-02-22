import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/calculator/index.jsx')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
