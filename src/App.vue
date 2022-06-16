<template>
  <van-config-provider :theme="theme">
    <router-view />
  </van-config-provider>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { ConfigProviderTheme } from 'vant'
import { localStorage } from '@/utils/local-storage'
import { useStore } from '@/stores'

const store = useStore()
const res = localStorage.get('theme')
const theme = ref<ConfigProviderTheme>(res)
const mode = computed(() => store.mode)

watch(mode, (val) => {
  if(val === 'dark') {
    theme.value = 'dark'
    document.querySelector('html')
    .setAttribute('data-theme', 'dark')
  } else {
    theme.value = 'light'
    document.querySelector('html')
    .setAttribute('data-theme', 'light')
  }
}, { immediate: true })

</script>
