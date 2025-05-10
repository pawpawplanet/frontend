import { createApp } from 'vue'
import Toast from '@/components/toast/toast-component.vue'

let app = null
let instance = null

export function useToast() {
  if (!app) {
    const container = document.createElement('div')
    document.body.appendChild(container)

    app = createApp(Toast)
    instance = app.mount(container)
  }

  return {
    show(message, status, duration) {
      instance.showToast(message, status, duration)
    }
  }
}
