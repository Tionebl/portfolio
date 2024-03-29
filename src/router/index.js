import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contactForm',
      name: 'contactForm',
      component: () => import ('../views/contactForm.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import ('../views/skills.vue')
    },
    {
      path: '/degree',
      name: 'degree',
      component: () => import ('../views/degree.vue')
    },
    {
      path: '/kendoUiTest',
      name: 'kendoUiTest',
      component: () => import ('../views/kendoUiTest.vue')
    }
  ]
})

export default router
