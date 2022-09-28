<template>
  <van-nav-bar title="📊 charts" left-arrow @click-left="onClickLeft"/>
  
  <div class="container">
    <div id="chart" class="card"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'

onMounted(() => {
  const myChart = echarts.init(document.getElementById('chart'))

  myChart.setOption({
    title: {
      text: ''
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
})

// back
const onClickLeft = () => history.back()
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  height: 300px;
  background: #fff;
}

[data-theme='dark'] {
  .card {
    background: #222;
    color: #fff;
  }
}
</style>

