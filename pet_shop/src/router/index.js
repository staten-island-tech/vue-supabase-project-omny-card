import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/login.vue'
import Pets from '../views/pets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/pets',
      name: 'pets',
      component: Pets,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

import { useAuthStore } from '@/stores/auth'

router.beforeEach(async (to) => {
  const auth = useAuthStore()

  await auth.getUser()

  if (to.meta.requiresAuth && !auth.user) {
    return '/login'
  }

  return true
})

export default router
