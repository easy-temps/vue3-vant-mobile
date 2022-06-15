<template>
  <van-config-provider :theme="theme">
    <van-switch v-model="checked" />
    <router-view />
  </van-config-provider>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ConfigProviderTheme } from 'vant'

const theme = ref<ConfigProviderTheme>('light')
const checked = ref<boolean>(false)

watch(checked,() => {
  if(checked.value) {
    theme.value = 'dark'
    document.querySelector('html')
    .setAttribute('data-theme', 'data-theme-dark')
  } else {
    theme.value = 'light'
    document.querySelector('html')
    .setAttribute('data-theme', 'data-theme-light')
  }
})
</script>
