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
      list.value.push(`${list.value.length + 1} 随便滑滑,离开再回来时位置会保留不变哦⭐️~`)
    }

    loading.value = false

    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}

/**
 * ⭐️ 如果你想在离开页面时保存滚动位置，并在返回时恢复它，你可以参考以下实现思路：
 *
 * - 1. kepAlive 设置为 true ，让组件被缓存。
 * - 2. 在页面离开时使用 `onBeforeRouteLeave` 钩子保存当前滚动位置。
 * - 3. 在页面激活时使用 `onActivated` 钩子恢复上次的滚动位置。
 */
const scrollTop = ref(0) // 存储当前的滚动位置

// 当keepAlive为true的组件被激活时，滚动到指定的位置
onActivated(() => {
  window.scrollTo(0, scrollTop.value)
})

// 在路由离开前，保存当前的滚动位置
onBeforeRouteLeave(() => {
  scrollTop.value
    = window.scrollY
      || document.documentElement.scrollTop
      || document.body.scrollTop
})

/**
 * 如果你要滚动的元素是指定的元素，按以下步骤处理：
 *
 * 1. 在 template 中，给滚动容器元素添加 ref，例如 ref="scrollContainer"。
 * 2. 在 setup 中，使用 const scrollContainer = ref(null) 获取该元素的引用。
 * 3. 在 onBeforeRouteLeave 钩子中，保存 scrollContainer.value.scrollTop 到 scrollTop.value。
 * 4. 在 onActivated 钩子中，将 scrollTop.value 设置为 scrollContainer.value.scrollTop。
 *
 * 万事OK👌🏻
 */
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
        {{ item }}
      </div>
    </van-cell>
  </van-list>
</template>

<route lang="json5">
{
  name: 'ScrollCache',
  meta: {
    title: '🧡 ScrollCache',
    i18n: 'menus.ScrollCache',
    keepAlive: true
  },
}
</route>
