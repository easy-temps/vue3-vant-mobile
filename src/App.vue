<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useAppStore from '@/stores/modules/app'
import useRouteCache from '@/stores/modules/routeCache'
import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'
import useAutoThemeSwitcher from '@/hooks/useAutoThemeSwitcher'

useHead({
  title: 'Vue3 Vant Mobile',
  meta: [
    {
      name: 'description',
      content: 'Vue + Vite H5 Starter Template',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})

const appStore = useAppStore()
const { mode } = storeToRefs(appStore)

const routeTransitionNameStore = useRouteTransitionNameStore()
const { routeTransitionName } = storeToRefs(routeTransitionNameStore)
const { initializeThemeSwitcher } = useAutoThemeSwitcher(appStore)

const keepAliveRouteNames = computed(() => {
  return useRouteCache().routeCaches as string[]
})

onMounted(() => {
  initializeThemeSwitcher()
})

const containerRef = ref()
const { height: containerHeight } = useElementSize(containerRef)
const navBarHeight = 48
const currentRoute = useRoute()
const tabBarHeight = computed(() => currentRoute.meta.level && currentRoute.meta.level !== 2 ? 52 : 0)
const routeViewHeight = computed(() => containerHeight.value - navBarHeight - tabBarHeight.value)
</script>

<template>
  <VanConfigProvider ref="containerRef" class="h-full" :theme="mode">
    <NavBar />
    <div class="overflow-y-auto" :style="{ height: `${routeViewHeight}px` }">
      <router-view v-slot="{ Component, route }">
        <transition :name="routeTransitionName">
          <keep-alive :include="keepAliveRouteNames">
            <component :is="Component" :key="route.name" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
    <TabBar />
  </VanConfigProvider>
</template>
