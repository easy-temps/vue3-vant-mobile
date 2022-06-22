import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './app.less'

// Vant 桌面端适配
import '@vant/touch-emulator'

const app = createApp(App)

app
  .use(router)
  .use(createPinia())

app.mount('#app')
