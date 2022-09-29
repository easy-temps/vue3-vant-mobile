import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import './app.less';

// Vant 桌面端适配
import '@vant/touch-emulator';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app
  .use(router)
  .use(pinia);

app.mount('#app');
