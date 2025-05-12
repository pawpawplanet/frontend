import SignupPage from '@/views/SignupPage.vue'

const signUpRouter = {
  path: 'signup',
  name: 'signup',
  component: SignupPage,
  meta: {
    verification_required: false,
  },
}

export default signUpRouter
