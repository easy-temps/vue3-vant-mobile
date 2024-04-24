<script setup lang="ts">
import router from '@/router'
import { useUserStore } from '@/stores'
import defaultAvatar from '@/assets/images/default-avatar.svg'

definePage({
  name: 'profile',
  meta: {
    level: 1,
  },
})

const { t } = useI18n()
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

function goLogin() {
  router.push({ name: 'login', query: { redirect: 'profile' } })
}

function logout() {
  userStore.logout()
  router.push({ name: 'login', query: { redirect: 'profile' } })
}
</script>

<template>
  <Container>
    <div mx-auto mb-60 pt-15 text-center text-16 text-dark dark:text-white>
      <template v-if="userInfo.uid">
        <div class="bg mb-32 mt-64">
          <van-image :src="userInfo.avatar || defaultAvatar" round class="h-64 w-64 border" />
        </div>
        <div class="mb-64">
          {{ userInfo.name }}
        </div>
        <div class="mb-32">
          {{ userInfo.prose }}
        </div>
        <van-button class="w-xl" type="primary" @click="logout()">
          {{ t('login.logout') }}
        </van-button>
      </template>
      <template v-else>
        <van-button class="w-xl" type="primary" @click="goLogin()">
          {{ t('login.login') }}
        </van-button>
      </template>
    </div>
  </Container>
</template>
