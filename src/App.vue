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

onMounted(() => {
  initializeThemeSwitcher()
})

const appSrapperTop = ref('0px')
const appSrapperHeight = ref('calc( 100% - 0px )')
const router = useRouter()
router.beforeEach((to) => {
  to.meta.title !== undefined ? appSrapperTop.value = '46px' : appSrapperTop.value = '0px'
  to.meta.title !== undefined ? appSrapperHeight.value = 'calc( 100% - 46px )' : appSrapperHeight.value = 'calc( 100% - 0px )'
})
</script>

<template>
  <VanConfigProvider :theme="mode">
    <NavBar />
    <router-view v-slot="{ Component, route }">
      <transition :name="routeTransitionName">
        <div :key="route.name" class="app-wrapper" :style="{ top: appSrapperTop, height: appSrapperHeight }">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
  </VanConfigProvider>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  position: absolute;
  left: 0;
  overflow-y: auto;
}
</style>
