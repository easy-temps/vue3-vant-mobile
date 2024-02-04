import { defineStore } from 'pinia'
import type { ConfigProviderTheme } from 'vant'

const prefersDark
= window.matchMedia
&& window.matchMedia('(prefers-color-scheme: dark)').matches

const useAppStore = defineStore('app', () => {
  const theme = prefersDark ? 'dark' : 'light'
  const mode = ref<ConfigProviderTheme>(theme)

  const swithMode = (val: ConfigProviderTheme) => {
    mode.value = val
  }

  return {
    mode,
    swithMode,
  }
}, {
  persist: true,
})

export default useAppStore
