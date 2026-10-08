import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  async scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (!to.hash) return
    // The home view is loaded asynchronously; the browser's initial anchor jump is too early.
    await document.fonts?.ready
    if (document.getElementById(to.hash.slice(1))) {
      return { el: to.hash, top: window.innerWidth >= 992 ? 80 : 64 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home/index.vue')
    }
  ]
})

export default router
