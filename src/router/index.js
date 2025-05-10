import { createRouter, createWebHistory } from 'vue-router'
import LayoutMain from '@/layouts/layout-main.vue'
import HomeView from '../views/HomeView.vue'
import BecomeSitterPage from '../views/BecomeSitterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import OwnerProfile from '../views/OwnerProfile.vue'
import FreelancerInfo from '../views/FreelancerInfo.vue'
import ServiceEditor from '../views/ServiceEditor.vue'


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
        },
        {
          path: '/freelancer-info',
          name: 'freelancer-info',
          component: FreelancerInfo,
        },
        {
          path: '/freelancer/services/:type',
          name: 'service-editor',
          component: ServiceEditor,
        },
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
