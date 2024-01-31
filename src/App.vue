<script setup lang="ts">
import type { ConfigProviderTheme } from 'vant'
import { storeToRefs } from 'pinia'
import useRouteTransitionNameStore from '@/stores/modules/routeTransitionName'

const theme = ref<ConfigProviderTheme>('light')
provide('isRealDark', computed(() => theme.value === 'dark'))

const routeTransitionNameStore = useRouteTransitionNameStore()
const { routeTransitionName } = storeToRefs(routeTransitionNameStore)
</script>

<template>
  <VanConfigProvider :theme="theme">
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
