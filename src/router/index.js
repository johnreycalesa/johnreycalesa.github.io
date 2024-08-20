import { createRouter, createWebHistory } from 'vue-router'
import WebsitePortfolio from '../views/WebsitePortfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WebsitePortfolio
    },
    {
      path: '/art',
      name: 'art',
      component: () => import('../views/ArtPortfolio.vue')
    }
  ]
})

export default router
