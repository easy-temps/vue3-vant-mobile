<template>
  <van-nav-bar title="💿 mock 指南" left-arrow @click-left="onClickLeft"/>

  <div class="container">
    <div class="data-label"> 来自异步请求的数据 </div>
    <div class="data-content">
      <div v-if="messages">{{ messages }}</div>
      <van-empty v-else description="暂无数据" />
    </div>

    <van-button round block type="primary" @click="pull">请求</van-button>
    <van-button round block type="default" @click="reset">清空</van-button>
  </div>
</template>

<script setup lang="ts">
import { queryProse } from '@/api'

const messages = ref<string>('')

const pull = () => {
  queryProse().then(res => {
    messages.value = res.prose
  })
}

// reset data
const reset = () => messages.value = ''

// back
const onClickLeft = () => history.back()

</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 30px;

  .data-label {
    color: #969799;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  .data-content {
    height: 300px;
    padding: 20px;
    line-height: 30px;
    background: #fff;
    margin-top: 20px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

[data-theme='dark'] {
  .data-content {
    background: #222;
    color: #fff;
  }
}

.van-button--block {
  margin-top: 15px;
}
</style>
