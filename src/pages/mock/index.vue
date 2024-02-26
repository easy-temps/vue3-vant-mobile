<script setup lang="ts">
import { queryProse } from '@/api'

definePage({
  name: 'mock',
  meta: {
    level: 2,
  },
})

const messages = ref<string>('')

function pull() {
  queryProse().then((res) => {
    messages.value = res.data.prose
  })
}

// reset data
const reset = () => messages.value = ''

// back
const onClickLeft = () => history.back()
</script>

<template>
  <div>
    <VanNavBar title="💿 Mock 指南" left-arrow fixed @click-left="onClickLeft" />

    <Container>
      <div class="data-label">
        来自异步请求的数据
      </div>

      <div class="data-content bg-white dark:bg-[--van-background-2]">
        <div v-if="messages">
          {{ messages }}
        </div>
        <VanEmpty v-else description="暂无数据" />
      </div>

      <van-space class="m-10" direction="vertical" fill>
        <VanButton type="primary" round block @click="pull">
          请求
        </VanButton>
        <VanButton type="default" round block @click="reset">
          清空
        </VanButton>
      </van-space>
    </Container>
  </div>
</template>

<style lang="less" scoped>
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
  margin-top: 20px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
