import '@/assets/styles/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router'
import SvgIcon from '@/components/svg-icon/svg-icon.vue'
import Button from '@/components/button/button-component.vue'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// 自定義 toast 套件
import { useToast } from '@/plugins/toast/toast-plugin.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(useToast)
app.use(VCalendar, {})
app.component('SvgIcon', SvgIcon)
app.component('ButtonComponent', Button)

app.mount('#app')
