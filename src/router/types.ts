import type { RouteLocationNormalized } from 'vue-router'

export type EnhancedRouteLocation = RouteLocationNormalized & {
  meta: {
    level?: number | unknown
    name?: string
    keepAlive?: boolean
  }
}
