<template>
  <div class="container">
    <img class="logo" src="@/assets/logo.png" alt="logo" />
    <van-button type="primary" size="small" plain to="/workplace">进入工作区</van-button>
  </div>
</template>

<script setup lang="ts"></script>

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
