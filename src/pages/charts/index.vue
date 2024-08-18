<script setup lang="ts">
definePage({
  name: 'charts',
  meta: {
    level: 2,
    title: '📊 Echarts 演示',
    i18n: 'menus.echartsDemo',
  },
})

const { t } = useI18n()

const barOption = {
  title: {},
  tooltip: {},
  xAxis: {
    data: [t('charts.January'), t('charts.February'), t('charts.March'), t('charts.April'), t('charts.May'), t('charts.June')],
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
</script>

<template>
  <div class="p-16">
    <Chart :option="refBarOption" :style="{ height: '330px' }" />
    <Chart :option="refLineOption" :style="{ height: '330px' }" />
    <Chart :option="refScoreOption" :style="{ height: '330px' }" />
  </div>
</template>
