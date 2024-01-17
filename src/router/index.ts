import { createRouter, createWebHistory } from 'vue-router/auto'
import NProgress from 'nprogress'

import { useRouteTransitionNameHook } from '@/stores/modules/routeTransitionName'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: true, parent: '#app' })
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  const hook = useRouteTransitionNameHook()
  if (to.meta.level > from.meta.level)
    hook.setName('slide-fadein-left') // 进入动画

  else if (to.meta.level < from.meta.level)
    hook.setName('slide-fadein-right') // 返回动画

  else
    hook.setName('') // 没有动画

  next()
})

router.afterEach(() => {
  NProgress.done()
})

// 导出路由实例，并在 `main.ts` 挂载
export default router
