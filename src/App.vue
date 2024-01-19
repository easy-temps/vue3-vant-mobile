<script setup lang="ts">
import type { ConfigProviderTheme } from 'vant'
import { localStorage } from '@/utils/local-storage'
import { useStore } from '@/stores'
import { useRouteTransitionNameHook } from '@/stores/modules/routeTransitionName'

const store = useStore()
const theme = ref<ConfigProviderTheme>('light')
const mode = computed(() => store.mode)

watch(mode, (val) => {
  if (val === 'dark' || localStorage.get('theme') === 'dark') {
    theme.value = 'dark'
    document.querySelector('html')
      .setAttribute('data-theme', 'dark')
  }
  else {
    theme.value = 'light'
    document.querySelector('html')
      .setAttribute('data-theme', 'light')
  }
}, { immediate: true })

provide('isRealDark', computed(() => theme.value === 'dark'))
</script>

<template>
  <VanConfigProvider :theme="theme">
    <router-view v-slot="{ Component, route }">
      <transition :name="useRouteTransitionNameHook().routeTransitionName">
        <div :key="route.name" class="app-wrapper">
          <component :is="Component" v-if="Component" />
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
