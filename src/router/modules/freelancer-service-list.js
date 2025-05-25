import freelancerServiceList from '@/views/FreelancerServiceList.vue'

const freelancerServiceListRouter = {
  path: 'freelancer-service-list',
  name: 'freelancerservicelist',
  component: freelancerServiceList,
  meta: {
    verification_required: true,
  },
}

export default freelancerServiceListRouter
