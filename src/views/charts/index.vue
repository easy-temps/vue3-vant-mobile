<script setup lang="ts">
const barOption = {
  title: {},
  tooltip: {},
  xAxis: {
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
}

const lineOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}

const scoreOption = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%',
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      detail: {
        formatter: '{value}',
      },
      data: [
        {
          value: 50,
          name: 'SCORE',
        },
      ],
    },
  ],
}

const refBarOption = ref(barOption)
const refLineOption = ref(lineOption)
const refScoreOption = ref(scoreOption)

// back
const onClickLeft = () => history.back()
</script>

<template>
  <VanNavBar title="📊 Echarts" left-arrow fixed @click-left="onClickLeft" />

  <div class="container">
    <div class="chart">
      <Chart :option="refBarOption" :style="{ height: '330px' }" />
    </div>

    <div class="chart item">
      <Chart :option="refLineOption" :style="{ height: '330px' }" />
    </div>

    <div class="chart item">
      <Chart :option="refScoreOption" :style="{ height: '330px' }" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 60px 16px;
  position: relative;
}

.chart {
  width: 100%;
  height: 300px;
  background: #fff;
}

.chart.item {
  margin-top: 15px;
}

[data-theme='dark'] {
  .chart {
    color: #fff;
    background: #222;
  }
}
</style>
