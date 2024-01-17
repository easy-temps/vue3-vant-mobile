import { createPinia, defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'index',
  persist: true,
  state: () => ({
    // light || dark
    mode: '',
  }),
})

const store = createPinia()
export { store }
