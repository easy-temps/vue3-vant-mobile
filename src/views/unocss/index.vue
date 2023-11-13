<script setup lang="ts">
// back
const onClickLeft = () => history.back()
</script>

<template>
  <VanNavBar title="🪶 Unocss" left-arrow fixed @click-left="onClickLeft" />

  <div class="w-full h-100vh py-60 px-20">
    <span class="color-pink font-semibold"> Unocss </span>示例（WIP）...
  </div>
</template>
