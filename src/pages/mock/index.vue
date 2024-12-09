<script setup lang="ts">
import { queryProse } from '@/api'

const messages = ref<string>('')

function pull() {
  queryProse().then(({ code, result }) => {
    if (code === 0)
      messages.value = result
  })
}
</script>

<template>
  <div class="data-label">
    {{ $t('mock.fromAsyncData') }}
  </div>

  <div class="data-content bg-white dark:bg-[--van-background-2]">
    <div v-if="messages">
      {{ messages }}
    </div>
    <VanEmpty v-else :description="$t('mock.noData')" />
  </div>

  <van-space class="m-10" direction="vertical" fill>
    <VanButton type="primary" round block @click="pull">
      {{ $t('mock.pull') }}
    </VanButton>
    <VanButton type="default" round block @click="messages = ''">
      {{ $t('mock.reset') }}
    </VanButton>
  </van-space>
</template>

<route lang="json5">
{
  name: 'mock',
  meta: {
    title: '💿 Mock 指南',
    i18n: 'menus.mockGuide'
  },
}
</route>

<style lang="less" scoped>
.data-label {
  color: #969799;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-top: 10px;
}

.data-content {
  height: 300px;
  padding: 20px;
  line-height: 30px;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
