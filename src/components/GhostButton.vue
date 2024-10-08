<template>
  <van-button size="small" plain type="primary">
    <slot />
  </van-button>
</template>

<style scoped>
.van-button {
  --van-button-border-width: 0;
  --van-button-plain-background: opacity;
}
</style>
