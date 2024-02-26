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
</script>

<template>
  <VanCellGroup inset>
    <VanCell center title="🌗 暗黑模式">
      <template #right-icon>
        <VanSwitch v-model="checked" size="20px" @click="toggle()" />
      </template>
    </VanCell>

    <VanCell title="💿 Mock 指南" to="mock" is-link />
    <VanCell title="📊 Echarts 演示" to="charts" is-link />
    <VanCell title="🎨 Unocss 示例" to="unocss" is-link />
    <VanCell title="🍍 持久化 Pinia 状态" to="counter" is-link />
    <VanCell title="🙅 404 演示" to="unknown" is-link />

    <VanCell center>
      <template #title>
        <span class="mr-4 v-middle">🚀 欢迎补充</span>
        <VanTag type="primary">
          PR
        </VanTag>
      </template>
    </VanCell>
  </VanCellGroup>
</template>

<route lang="yaml">
  meta:
    layout: home
</route>
