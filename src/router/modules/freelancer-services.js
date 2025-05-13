import ServiceEditor from '@/views/ServiceEditor.vue'

const freelancerServicesRouter = {
  path: 'freelancer/services/:type',
  name: 'service-editor',
  component: ServiceEditor,
  meta: {
    verification_required: true,
  },
}

export default freelancerServicesRouter
