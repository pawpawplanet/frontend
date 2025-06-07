import OwnerOrderManagement from '@/views/OwnerOrderManagement.vue'

const ownerOrderManagementRouter = {
  path: '/owner-order-management',
  name: 'owner-order-management',
  component: OwnerOrderManagement,
  meta: {
    verification_required: true,
  },
}

export default ownerOrderManagementRouter