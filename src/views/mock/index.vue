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
  <div class="h-full w-full">
    <VanNavBar title="💿 Mock 指南" left-arrow fixed @click-left="onClickLeft" />

    <div class="h-full w-full px-30 py-74 light:bg-[#eff2f5]">
      <div class="data-label">
        来自异步请求的数据
      </div>
      <div class="data-content dark:bg-[--van-background-2] light:bg-white">
        <div v-if="messages">
          {{ messages }}
        </div>
        <VanEmpty v-else description="暂无数据" />
      </div>

      <VanButton round block type="primary" @click="pull">
        请求
      </VanButton>
      <VanButton round block type="default" @click="reset">
        清空
      </VanButton>
    </div>
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

.van-button--block {
  margin-top: 15px;
}
</style>
