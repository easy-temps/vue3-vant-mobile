<script setup lang="ts">
import type { ECharts } from 'echarts'
import * as echarts from 'echarts'
import { debounce } from 'lodash-es'
import { addListener, removeListener } from 'resize-detector'
import dark from './dark'

const props = defineProps({
  option: Object,
})

echarts.registerTheme('dark-chart', dark)

const chartDom = ref<HTMLDivElement>()
let chart: ECharts | null = null
const isRealDark = ref(isDark.value)
function resizeChart() {
  chart?.resize()
}

const resize = debounce(resizeChart, 300)

function disposeChart() {
  if (chartDom.value)
    removeListener(chartDom.value, resize)

  chart?.dispose()
  chart = null
}

function initChart() {
  disposeChart()
  if (chartDom.value) {
    // init echarts
    chart = echarts.init(chartDom.value, isRealDark.value ? 'dark-chart' : undefined)
    chart.setOption(props.option)
    addListener(chartDom.value, resize)
  }
}

watch(isRealDark, () => {
  initChart()
}, {
  flush: 'post',
})

onMounted(() => {
  watch(() => props.option, () => {
    chart?.setOption(props.option)
  }, {
    deep: true,
    flush: 'post',
  })

  initChart()
})

onUnmounted(() => {
  disposeChart()
})
</script>

<template>
  <div ref="chartDom" />
</template>
