import { defineStore } from 'pinia'
import type { ConfigProviderTheme } from 'vant'

export interface AppStore {
  switchMode: (val: ConfigProviderTheme) => void
}

const prefersDark
= window.matchMedia
  && window.matchMedia('(prefers-color-scheme: dark)').matches

const useAppStore = defineStore('app', () => {
  const theme = prefersDark ? 'dark' : 'light'
  const mode = ref<ConfigProviderTheme>(theme)

  const switchMode = (val: ConfigProviderTheme) => {
    mode.value = val
  }

  return {
    mode,
    switchMode,
  }
}, {
  persist: true,
})

export default useAppStore
