<script setup lang="ts">
defineOptions({
  name: 'ScrollCache',
})

const list = ref([])
const loading = ref(false)
const finished = ref(false)
const { t } = useI18n()

function onLoad() {
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(`${list.value.length + 1}`)
    }

    loading.value = false

    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}

const scrollTop = ref(0)

onActivated(() => {
  window.scrollTo(0, scrollTop.value)
})

onBeforeRouteLeave(() => {
  scrollTop.value
    = window.scrollY
      || document.documentElement.scrollTop
      || document.body.scrollTop
})
</script>

<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="已经到底啦 ~"
    loading-text="加载中..."
    @load="onLoad"
  >
    <van-cell
      v-for="(item, index) in list"
      :key="index"
      :border="false"
      class="mb-8 rounded-12"
    >
      <template #title>
        {{ t('scrollCache.listItem') }}
      </template>

      <template #value>
        {{ item }}
      </template>
    </van-cell>
  </van-list>
</template>

<route lang="json5">
{
  name: 'ScrollCache',
  meta: {
    title: '📜 ScrollCache',
    i18n: 'menus.scrollCache',
    keepAlive: true
  },
}
</route>
