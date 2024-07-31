import { createRouter, createWebHistory } from 'vue-router'
import { home } from './home'
const Template = () => import('@/views/template/TheTemplate.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: Template,
      children : [...home]
    }
  ]
})

export default router
