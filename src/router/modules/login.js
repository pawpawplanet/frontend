import LoginPage from '@/views/LoginPage.vue'

const loginRouter = {
  path: 'login',
  name: 'login',
  component: LoginPage,
  meta: {
    verification_required: false,
  },
}

export default loginRouter
