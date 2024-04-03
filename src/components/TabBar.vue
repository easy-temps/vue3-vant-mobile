<script setup lang="ts">
const { t } = useI18n()
const active = ref(0)
</script>

<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item replace icon="home-o" to="/">
      {{ t('layouts.home') }}
    </van-tabbar-item>
    <van-tabbar-item replace icon="user-circle-o" to="/profile">
      {{ t('layouts.profile') }}
    </van-tabbar-item>
  </van-tabbar>
</template>
