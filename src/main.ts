import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// Vant 桌面端适配
import '@vant/touch-emulator'
import { Button } from 'vant'

createApp(App)
  .use(createPinia())
  .use(Button)
  .mount('#app')
