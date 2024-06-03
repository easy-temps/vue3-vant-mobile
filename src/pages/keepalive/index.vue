<script setup lang="ts">
defineOptions({
  name: 'KeepAlive',
})

const value = ref(1)
</script>

<template>
  <Container>
    <p>{{ $t('keepAlive.label') }}</p>
    <van-stepper v-model="value" />
  </Container>
</template>

<route lang="json">
{
  "name": "KeepAlive",
  "meta": {
    "level": 2,
    "title": "🧡 KeepAlive",
    "i18n": "home.keepAlive",
    "keepAlive": true
  }
}
</route>
