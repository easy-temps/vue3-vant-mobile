<script setup lang="ts">
defineOptions({
  name: 'KeepAlive',
})

const value = ref(1)
</script>

<template>
  <p>{{ $t('keepAlive.label') }}</p>
  <van-stepper v-model="value" />
</template>

<route lang="json5">
{
  name: 'KeepAlive',
  meta: {
    title: '🧡 KeepAlive',
    i18n: 'menus.keepAlive',
    keepAlive: true
  },
}
</route>
