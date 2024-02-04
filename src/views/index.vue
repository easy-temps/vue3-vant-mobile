<script setup lang="ts">
import useAppStore from '@/stores/modules/app'

definePage({
  name: 'index',
  meta: {
    level: 1,
  },
})
const appStore = useAppStore()
const checked = ref<boolean>(isDark.value)

function toggle() {
  toggleDark()
  appStore.swithMode(isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <div class="h-full w-full pt-30 light:bg-[#eff2f5]">
    <VanCellGroup title="一个集成最新技术栈、完整干净的移动端模板" inset>
      <VanCell center title="🌗 暗黑模式">
        <template #right-icon>
          <VanSwitch v-model="checked" size="23px" @click="toggle()" />
        </template>
      </VanCell>

      <VanCell title="💿 Mock 指南" to="mock" is-link />
      <VanCell title="📊 Echarts 演示" to="charts" is-link />
      <VanCell title="🪶 Unocss 示例" to="unocss" is-link />
      <VanCell title="🍍 持久化 Pinia 状态" to="counter" is-link />

      <VanCell center>
        <template #title>
          <span class="custom-title">🎨 欢迎补充</span>
          <VanTag type="primary">
            PR
          </VanTag>
        </template>
      </VanCell>
    </VanCellGroup>
  </div>
</template>

<style lang="less" scoped>
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}
</style>
