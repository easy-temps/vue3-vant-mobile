<script setup lang="ts">
import useAppStore from '@/stores/modules/app'

definePage({
  name: 'main',
  meta: {
    level: 1,
  },
})

const appStore = useAppStore()
const checked = ref<boolean>(isDark.value)

watch(
  () => isDark.value,
  (newMode) => {
    checked.value = newMode
  },
  { immediate: true },
)

function toggle() {
  toggleDark()
  appStore.swithMode(isDark.value ? 'dark' : 'light')
}

const menuItems = [
  { title: '💿 Mock 指南', route: 'mock' },
  { title: '📊 Echarts 演示', route: 'charts' },
  { title: '🎨 Unocss 示例', route: 'unocss' },
  { title: '🍍 持久化 Pinia 状态', route: 'counter' },
  { title: '🙅 404页 演示', route: 'unknown' },
]
</script>

<template>
  <VanCellGroup inset>
    <VanCell center title="🌗 暗黑模式">
      <template #right-icon>
        <VanSwitch v-model="checked" size="20px" aria-label="on/off Dark Mode" @click="toggle()" />
      </template>
    </VanCell>

    <template v-for="item in menuItems" :key="item.route">
      <VanCell :title="item.title" :to="item.route" is-link />
    </template>
  </VanCellGroup>
</template>

<route lang="yaml">
  meta:
    layout: home
</route>
