import FreelancerList from '@/views/FreelancerList.vue'

const freelancerListRouter = {
  path: 'freelancer-list',
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
        path: '/freelancer-list',
        name: '搜尋結果',
      },
    ],
  },
}

export default freelancerListRouter
