import { createRouter, createWebHistory } from 'vue-router'
import loginRouter from '@/router/modules/login.js'
import LayoutMain from '@/layouts/layout-main.vue'
import HomeView from '@/views/HomeView.vue'
import signUpRouter from '@/router/modules/signup.js'
import ownerprofileRouter from '@/router/modules/ownerprofile.js'
import becomeSitterRouter from '@/router/modules/become-sitter.js'
import freelancerInfoRouter from '@/router/modules/freelancer-info.js'
import freelancerServicesRouter from '@/router/modules/freelancer-services.js'


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
        loginRouter,
        signUpRouter,
        ownerprofileRouter,
        becomeSitterRouter,
        freelancerInfoRouter,
        freelancerServicesRouter,
      ],
    },
  ],
})

export default router
