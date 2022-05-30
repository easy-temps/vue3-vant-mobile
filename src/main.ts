import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// Vant 桌面端适配
import '@vant/touch-emulator'
import { Button } from 'vant'

// debugger board
import VConsole from 'vconsole'
const vConsole = new VConsole({ theme: 'dark' })

// 结束调试后，可移除掉
// vConsole.destroy()

// vite-plugin-vconsole 社区版
// https://github.com/vadxq/vite-plugin-vconsole

createApp(App)
  .use(createPinia())
  .use(Button)
  .mount('#app')
