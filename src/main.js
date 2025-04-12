import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './registerServiceWorker';
import router from './router';

import App from './App.vue';

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app');
