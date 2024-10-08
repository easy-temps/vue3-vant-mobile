import { createRouter, createWebHistory } from 'vue-router/auto'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import type { EnhancedRouteLocation } from './types'
import useRouteCacheStore from '@/stores/modules/routeCache'
import { useUserStore } from '@/stores'
import { isLogin } from '@/utils/auth'

NProgress.configure({ showSpinner: true, parent: '#app' })

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  routes,
})

// This will update routes at runtime without reloading the page
if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach(async (to: EnhancedRouteLocation, _from, next) => {
  NProgress.start()

  const routeCacheStore = useRouteCacheStore()
  const userStore = useUserStore()

  // Route cache
  routeCacheStore.addRoute(to)

  if (isLogin() && !userStore.userInfo?.uid)
    await userStore.info()

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
