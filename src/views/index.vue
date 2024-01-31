<script setup lang="ts">
definePage({
  name: 'index',
  meta: {
    level: 1,
  },
})

const checked = ref<boolean>(false)
</script>

<template>
  <div class="container">
    <VanCellGroup title="一个集成最新技术栈、完整干净的移动端模板" inset>
      <VanCell center title="🌗 暗黑模式">
        <template #right-icon>
          <VanSwitch v-model="checked" size="23px" disabled />
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
