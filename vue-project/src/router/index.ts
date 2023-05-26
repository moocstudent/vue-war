import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// @ts-ignore
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
      component: () => {
        return import('../views/AboutView.vue');
      }
    },
    {
      path: '/count',
      name: 'count',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => {
        return import('../views/CountDemo.vue');
      }
    },
    {
      path: '/count2',
      name: 'count2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => {
        return import('../views/CountDemoCompose.vue');
      }
    },
    {
      path: '/toggle',
      name: 'toggle',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => {
        return import('../views/ToggleDemo.vue');
      }
    }
  ]
})

export default router
