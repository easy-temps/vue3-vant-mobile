<template>
  <div class="container">
    <img class="logo" src="../../../assets/logo.png" alt="logo" />
    <router-link to="/workplace">进入工作区</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .logo {
    width: 80px;
    height: 80px;
  }
}
</style>
