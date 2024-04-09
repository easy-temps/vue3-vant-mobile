<script setup lang="ts">
const { t } = useI18n()
const active = ref(0)
const route = useRoute()

const display = computed(() => {
  if (route.meta.level && route.meta.level !== 2)
    return true
  return false
})
</script>

<template>
  <van-tabbar v-show="display" v-model="active" route>
    <van-tabbar-item replace to="/">
      {{ t('layouts.home') }}
      <template #icon>
        <div class="i-carbon:home" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/profile">
      {{ t('layouts.profile') }}
      <template #icon>
        <div class="i-carbon:user" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
