import freelancerOrderList from '@/views/FreelancerOrderList.vue'

const freelancerOrderListRouter = {
  path: 'freelancer-order-list',
  name: 'freelancerorderlist',
  component: freelancerOrderList,
  meta: {
    verification_required: true,
  },
}

export default freelancerOrderListRouter
