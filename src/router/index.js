import { createRouter, createWebHistory } from 'vue-router'
import Root from '../views/Root.vue'

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Root,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
