import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import NProgress from 'nprogress'

import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: true, parent: '#app' })

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  extendRoutes: routes => setupLayouts(routes),
})

router.beforeEach((to, from, next) => {
  NProgress.start()

  const routeTransitionNameStore = useRouteTransitionNameStore()
  if (to.meta.level > from.meta.level)
    routeTransitionNameStore.setName('slide-fadein-left')

  else if (to.meta.level < from.meta.level)
    routeTransitionNameStore.setName('slide-fadein-right')

  else
    routeTransitionNameStore.setName('')

  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
