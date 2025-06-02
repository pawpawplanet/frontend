import FreelancerList from '@/views/FreelancerList.vue'

const freelancerListRouter = {
  path: 'service',
  name: 'freelancerList',
  component: FreelancerList,
  meta: {
    verification_required: false,
    breadcrumb: [
      {
        path: '/',
        name: '首頁',
      },
      {
        path: '/service',
        name: '搜尋結果',
      },
    ],
    keep_alive: true,
  },
}

export default freelancerListRouter
