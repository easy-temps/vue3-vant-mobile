<template>
  <van-nav-bar title="mock 指南" left-arrow @click-left="onClickLeft"/>
  <div class="container">
    <span style="margin-bottom: 10px;">这是请求的数据</span>
    <span>{{ projects.dataSource.name }}</span>
  </div>
</template>

<script setup lang="ts">
import { useFetchData } from '@/utils/hooks/useFetchData'
import { queryProjectNotice } from '@/api'

const onClickLeft = () => history.back()

const { context: projects } = useFetchData(() => {
  return queryProjectNotice().then(res => {
    return {
      data: res
    }
  })
})

</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
</style>
