<template>
  <div class="container">
    <van-cell-group inset>
      <van-cell center title="暗黑模式">
        <template #right-icon>
          <van-switch v-model="checked" size="18px" />
        </template>
      </van-cell>

      <van-cell title="mock 指南" to="mock" is-link />
      
      <van-cell center>
        <template #title>
          <span class="custom-title">小游戏</span>
          <van-tag type="primary">敬请期待</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from '@/stores'
import { localStorage } from '@/utils/local-storage'

const store = useStore()
const res = localStorage.get('theme')
const tem = res === 'dark' ? true: false
const checked = ref<boolean>(tem)

watch(checked,() => {
  if(checked.value) {
    store.mode = 'dark'
    document.querySelector('html')
    .setAttribute('data-theme', 'dark')
    localStorage.set('theme', store.mode)
  } else {
    store.mode = 'light'
    document.querySelector('html')
    .setAttribute('data-theme', 'light')
    localStorage.set('theme', store.mode)
  }
}, { immediate: true })
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  position: relative;
  // background: #eff2f5;

  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }
}
</style>
