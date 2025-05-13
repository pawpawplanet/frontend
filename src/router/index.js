import { createRouter, createWebHistory } from 'vue-router'
import loginRouter from '@/router/modules/login.js'
import LayoutMain from '@/layouts/layout-main.vue'
import HomeView from '@/views/HomeView.vue'
import signUpRouter from '@/router/modules/signup.js'
import ownerprofileRouter from '@/router/modules/ownerprofile.js'
import becomeSitterRouter from '@/router/modules/become-sitter.js'
import freelancerInfoRouter from '@/router/modules/freelancer-info.js'
import freelancerServicesRouter from '@/router/modules/freelancer-services.js'

import { useLoginStore } from '@/stores/login.js'

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

router.beforeEach((to, from, next) => {
  const { is_login } = useLoginStore()
  // 先判斷是否已登入
  if (is_login) {
    // 已登入判斷 meta verification_required
    if (to.meta.verification_required) {
      next()
    } else if (!to.meta.verification_required) {
      if (to.path === '/login' || to.path === '/signup') {
        console.log('已登入')
        next('/')
      } else {
        next()
      }
    }
  } else if (!is_login) {
    // 未登入判斷 meta verification_required
    // verification_required 為 true 頁面需要登入才可瀏覽
    if (to.meta.verification_required) {
      next('/')
    } else {
      next()
    }
  }
  // next()
})

export default router
