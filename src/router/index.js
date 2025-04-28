import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '@/layouts/layout-main.vue'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutMain,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupPage,
    },
  ],
})

export default router
