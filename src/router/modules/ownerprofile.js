import OwnerProfile from '@/views/OwnerProfile.vue'

const ownerprofileRouter = {
  path: 'ownerprofile',
  name: 'ownerprofile',
  component: OwnerProfile,
  meta: {
    verification_required: true,
  },
}

export default ownerprofileRouter
