<script setup lang="ts">
import { useStore } from '@/stores'
import { localStorage } from '@/utils/local-storage'

definePage({
  name: 'index',
  meta: {
    level: 1,
  },
})

const store = useStore()
const themeStore = localStorage.get('theme')
const checked = ref<boolean>(themeStore === 'dark')

watch(checked, (val) => {
  if (val) {
    store.mode = 'dark'
    localStorage.set('theme', 'dark')
  }
  else {
    store.mode = 'light'
    localStorage.set('theme', 'light')
  }
})
</script>

<template>
  <div class="container">
    <VanCellGroup title="一个集成最新技术栈、完整干净的移动端模板" inset>
      <VanCell center title="🌗 暗黑模式">
        <template #right-icon>
          <VanSwitch v-model="checked" size="23px" />
        </template>
      </VanCell>

      <VanCell title="💿 Mock 指南" to="mock" is-link />

      <VanCell title="📊 Echarts 演示" to="charts" is-link />

      <VanCell title="🪶 Unocss 示例" to="unocss" is-link />

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
.container {
  width: 100%;
  height: 100%;
  padding-top: 30px;

  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }
}
</style>
