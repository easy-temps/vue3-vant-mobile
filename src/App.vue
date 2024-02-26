<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useAppStore from '@/stores/modules/app'
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
})

const appStore = useAppStore()
const { mode } = storeToRefs(appStore)

const routeTransitionNameStore = useRouteTransitionNameStore()
const { routeTransitionName } = storeToRefs(routeTransitionNameStore)

const { initializeThemeSwitcher } = useAutoThemeSwitcher(appStore)

onMounted(() => {
  initializeThemeSwitcher()
})
</script>

<template>
  <VanConfigProvider :theme="mode">
    <router-view v-slot="{ Component, route }">
      <transition :name="routeTransitionName">
        <div :key="route.name" class="app-wrapper">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </VanConfigProvider>
</template>

<style scoped>
.app-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
