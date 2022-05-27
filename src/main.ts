import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { Button } from 'vant'

// Vant 桌面端适配
import '@vant/touch-emulator'


createApp(App)
  .use(createPinia())
  .use(Button)
  .mount('#app')
