import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Vant 桌面端适配
import '@vant/touch-emulator'
import { Button } from 'vant'

// debugger board
import VConsole from 'vconsole'
new VConsole({ theme: 'light' })

// 结束调试后，可移除掉
// vConsole.destroy()

// vite-plugin-vconsole 社区版
// https://github.com/vadxq/vite-plugin-vconsole

const app = createApp(App)

app
  .use(router)
  .use(createPinia())
  .use(Button)

app.mount('#app')
