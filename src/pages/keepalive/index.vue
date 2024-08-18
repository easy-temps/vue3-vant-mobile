<script setup lang="ts">
defineOptions({
  name: 'KeepAlive',
})

definePage({
  name: 'KeepAlive',
  meta: {
    level: 2,
    title: '🧡 KeepAlive',
    i18n: 'menus.keepAlive',
    keepAlive: true,
  },
})

const value = ref(1)
</script>

<template>
  <div class="p-16">
    <p>{{ $t('keepAlive.label') }}</p>
    <van-stepper v-model="value" />
  </div>
</template>
