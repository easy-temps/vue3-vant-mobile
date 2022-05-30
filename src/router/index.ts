
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: true })

// 导入路由组件
import Dashboard from '../views/dashboard/analysis/index.vue'
import Workplace from '../views/dashboard/workplace/index.vue'

// 定义路由，每个路由都需要映射到一个组件
const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  }, {
    path: '/workplace',
    name: 'workplace',
    component: Workplace
  }
]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((_to, _from, next) => {
  NProgress.start(); // start progress bar
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

// 导出路由实例，并在 `main.ts` 挂载
export default router
