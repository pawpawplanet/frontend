import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '@/layouts/layout-main.vue'
import HomeView from '../views/HomeView.vue'
import BecomeSitterPage from '../views/BecomeSitterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import OwnerProfile from '../views/OwnerProfile.vue'

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
        },
        {
          path: 'become-a-sitter',
          name: 'becomesitter',
          component: BecomeSitterPage,
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
    {
      path: '/ownerprofile',
      name: 'ownerprofile',
      component: OwnerProfile,
    }
  ],
})

export default router
