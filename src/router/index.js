import { createRouter, createWebHistory } from 'vue-router'
import WebsitePortfolio from '../views/WebsitePortfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WebsitePortfolio,
      meta: {
        title: 'John Rey Calesa - Software Engineer Portfolio',
        description: 'Portfolio of John Rey Calesa, a skilled Software Engineer with 2+ years of experience in full-stack web development.',
        keywords: 'John Rey Calesa, Software Engineer, Full Stack Developer, Web Developer, Portfolio'
      }
    },
    {
      path: '/art',
      name: 'art',
      component: () => import('../views/ArtPortfolio.vue'),
      meta: {
        title: 'Art Portfolio - John Rey Calesa',
        description: 'Explore the artistic works and creative projects of John Rey Calesa.',
        keywords: 'John Rey Calesa, Art, Portfolio, Creative Works'
      }
    }
  ]
})

// Update document title and meta tags on route change
router.beforeEach((to, from, next) => {
  // Update title
  document.title = to.meta.title || 'John Rey Calesa - Software Engineer Portfolio'

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || 'Portfolio of John Rey Calesa, Software Engineer')
  }

  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]')
  if (metaKeywords) {
    metaKeywords.setAttribute('content', to.meta.keywords || 'John Rey Calesa, Software Engineer, Portfolio')
  }

  // Update Open Graph title
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) {
    ogTitle.setAttribute('content', to.meta.title || 'John Rey Calesa - Software Engineer Portfolio')
  }

  // Update Open Graph description
  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) {
    ogDescription.setAttribute('content', to.meta.description || 'Portfolio of John Rey Calesa, Software Engineer')
  }

  // Update Twitter title
  const twitterTitle = document.querySelector('meta[name="twitter:title"]')
  if (twitterTitle) {
    twitterTitle.setAttribute('content', to.meta.title || 'John Rey Calesa - Software Engineer Portfolio')
  }

  // Update Twitter description
  const twitterDescription = document.querySelector('meta[name="twitter:description"]')
  if (twitterDescription) {
    twitterDescription.setAttribute('content', to.meta.description || 'Portfolio of John Rey Calesa, Software Engineer')
  }

  next()
})

export default router
