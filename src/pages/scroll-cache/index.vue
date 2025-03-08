<script setup lang="ts">
defineOptions({
  name: 'ScrollCache',
})

const list = ref([])
const loading = ref(false)
const finished = ref(false)

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
      class="mb-[8px] rounded-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
    >
      <div class="flex items-center py-4 text-[#378df6]">
        {{ $t('scrollCache.listItem') }} {{ item }}
      </div>
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
