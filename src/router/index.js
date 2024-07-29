import { createRouter, createWebHistory } from 'vue-router'

const Template = () => import('@/views/template/TheTemplate.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Template
    }
  ]
})

export default router
