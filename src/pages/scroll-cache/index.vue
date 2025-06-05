<script setup lang="ts">
defineOptions({
  name: 'ScrollCache',
})

const loading = ref(false)
const finished = ref(false)
const list = ref([])

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
    :finished-text="$t('scrollCache.finished')"
    :loading-text="$t('scrollCache.loading')"
    @load="onLoad"
  >
    <ul class="space-y-10">
      <li v-for="item in list" :key="item" class="p-3 flex gap-12">
        <div class="shrink-0">
          <div class="rounded-full bg-gray-500/20 flex h-48 w-48 items-center justify-center overflow-hidden">
            <span class="text-[16px] text-zinc-600 tabular-nums dark:text-zinc-400"> {{ item }} </span>
          </div>
        </div>

        <div class="flex-1 min-w-0">
          <div class="mb-2 flex flex-row gap-1 w-full justify-between">
            <h3 class="text-[16px] text-zinc-600 tracking-tight font-semibold w-1/2 dark:text-white">
              <van-text-ellipsis :content="`${$t('scrollCache.sectionTitle')}`" />
            </h3>

            <time class="text-[12px] text-zinc-400 tabular-nums">2025-05-16</time>
          </div>

          <p class="text-[14px] text-zinc-500">
            <van-text-ellipsis :rows="2" :content="$t('scrollCache.sectionText')" />
          </p>
        </div>
      </li>
    </ul>
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
