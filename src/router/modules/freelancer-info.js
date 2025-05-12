import FreelancerInfo from '@/views/FreelancerInfo.vue'

const freelancerInfoRouter = {
  path: 'freelancer-info',
  name: 'freelancer-info',
  component: FreelancerInfo,
  meta: {
    verification_required: true,
  },
}

export default freelancerInfoRouter
