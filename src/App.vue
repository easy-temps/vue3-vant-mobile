<template>
  <van-config-provider :theme="theme">
    <van-switch v-model="checked" />
    <router-view />
  </van-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import type { ConfigProviderTheme } from 'vant'
export default defineComponent({
  setup() {
    const theme = ref<ConfigProviderTheme>('light')
    const checked = ref<boolean>(false)

    watch(checked,() => {
      if(checked.value) {
        theme.value = 'dark'
        document.getElementsByTagName('html')[0].setAttribute('data-theme', 'data-theme-dark')
      } else {
        theme.value = 'light'
        document.getElementsByTagName('html')[0].setAttribute('data-theme', 'data-theme-light')
      }
    })
    
    return {
      theme,
      checked
    }
  }
})
</script>
