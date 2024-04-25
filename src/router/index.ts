import { createRouter, createWebHistory } from 'vue-router/auto'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import type { EnhancedRouteLocation } from './types'
import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'
import useRouteCacheStore from '@/stores/modules/routeCache'
import { useUserStore } from '@/stores'
import { isLogin } from '@/utils/auth'

NProgress.configure({ showSpinner: true, parent: '#app' })

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  extendRoutes: routes => routes,
})

router.beforeEach(async (to: EnhancedRouteLocation, from, next) => {
  NProgress.start()

  const routeCacheStore = useRouteCacheStore()
  const routeTransitionNameStore = useRouteTransitionNameStore()
  const userStore = useUserStore()

  // Route cache
  routeCacheStore.addRoute(to)

  if (to.meta.level > from.meta.level)
    routeTransitionNameStore.setName('slide-fadein-left')

  else if (to.meta.level < from.meta.level)
    routeTransitionNameStore.setName('slide-fadein-right')

  else
    routeTransitionNameStore.setName('')

  if (isLogin()) {
    if (!userStore.userInfo?.uid) {
      await userStore.info()
      next()
    }

    else {
      next()
    }
  }
  else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
