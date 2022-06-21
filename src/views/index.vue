<template>
  <div class="container">
    <van-cell-group title="Do more difficult things" inset>
      <van-cell center title="🌗 暗黑模式">
        <template #right-icon>
          <van-switch v-model="checked" size="18px" />
        </template>
      </van-cell>

      <van-cell title="💿 mock 指南" to="mock" is-link />
      
      <van-cell center>
        <template #title>
          <span class="custom-title">🎨 小游戏</span>
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
const themeStore = localStorage.get('theme')
const checked = ref<boolean>(themeStore === 'dark' ? true: false)

watch(checked,(val) => {
  if(val) {
    store.mode = 'dark'
    localStorage.set('theme', 'dark')
  } else {
    store.mode = 'light'
    localStorage.set('theme', 'light')
  }
})
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
  position: relative;

  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }
}
</style>
