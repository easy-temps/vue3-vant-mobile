import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import useUserStore from './modules/user'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export { useUserStore }
export default pinia
