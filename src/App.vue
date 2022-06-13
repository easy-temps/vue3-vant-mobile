<template>
  <van-config-provider :theme="theme">
    <van-switch v-model="checked" />
    <router-view />
  </van-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  setup() {
    const theme = ref('dark')
    const checked = ref(true)

    watch(
      checked,() => {
        if(checked.value) {
          document.getElementsByTagName('html')[0].setAttribute('data-theme', 'data-theme-dark')
        } else {
          document.getElementsByTagName('html')[0].setAttribute('data-theme', 'data-theme-light')
        }
    }, { immediate: true })
    
    return {
      theme,
      checked
    }
  }
})
</script>
