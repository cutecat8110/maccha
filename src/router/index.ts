import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  async scrollBehavior(to, _from, savedPosition) {
    if (!savedPosition && !to.hash) return
    // Both anchors and saved positions need the final font layout before scrolling.
    await document.fonts?.ready
    if (savedPosition) return savedPosition
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
