<script setup lang="ts">
// back
const onClickLeft = () => history.back()
</script>

<template>
  <VanNavBar title="🪶 Unocss" left-arrow fixed @click-left="onClickLeft" />

  <div class="h-100vh w-full px-20 py-60">
    <span class="color-pink font-semibold"> Unocss </span>示例（WIP）...
  </div>
</template>
