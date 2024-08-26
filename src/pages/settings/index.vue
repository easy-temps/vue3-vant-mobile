<script setup lang="ts">
import { showConfirmDialog } from 'vant'
import router from '@/router'
import { useUserStore } from '@/stores'
import { version } from '~root/package.json'

const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

function Logout() {
  showConfirmDialog({
    title: '确认退出？',
  })
    .then(() => {
      userStore.logout()
      router.push({ name: 'home' })
    })
    .catch(() => {})
}
</script>

<template>
  <div class="text-center">
    <VanCellGroup :inset="true">
      <van-cell v-if="userInfo.uid" title="退出登录" clickable class="van-text-color" @click="Logout" />
    </VanCellGroup>

    <div class="mt-10 text-gray">
      当前版本: v{{ version }}
    </div>
  </div>
</template>

<style scoped>
.van-text-color {
  --van-cell-text-color: var(--van-red);
}
</style>

<route lang="json">
{
  "name": "settings",
  "meta": {
    "title": "我的设置",
    "i18n": "menus.settings"
  }
}
</route>
