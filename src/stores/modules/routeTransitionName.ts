import { defineStore } from 'pinia'
import { store } from '@/stores'

export const useRouteTransitionNameStore = defineStore({
  id: 'route-transition-name',
  state: () => ({
    // 过渡动画名称
    routeTransitionName: '',
  }),
  actions: {
    setName(name: string) {
      this.routeTransitionName = name
    },
  },
})

export function useRouteTransitionNameHook() {
  return useRouteTransitionNameStore(store)
}
