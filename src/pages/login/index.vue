<script setup lang="ts">
import { type RouteMap, useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

import logo from '~/images/logo.svg'
import logoDark from '~/images/logo-dark.svg'

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)

const dark = ref<boolean>(isDark.value)

watch(
  () => isDark.value,
  (newMode) => {
    dark.value = newMode
  },
)

const postData = reactive({
  username: '',
  password: '',
})

const rules = reactive({
  username: [
    { required: true, message: t('login.pleaseEnterUsername') },
  ],
  password: [
    { required: true, message: t('login.pleaseEnterPassword') },
  ],
})

async function asyncLogin(values: any) {
  try {
    loading.value = true
    await userStore.login({ ...postData, ...values })
    const { redirect, ...othersQuery } = router.currentRoute.value.query
    router.push({
      name: (redirect as keyof RouteMap) || 'home',
      query: {
        ...othersQuery,
      },
    })
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="m-x-a w-7xl text-center">
    <div class="mb-32 mt-64">
      <van-image :src="dark ? logoDark : logo" class="h-120 w-120" />
    </div>

    <van-form :model="postData" :rules="rules" @submit="asyncLogin">
      <van-cell-group inset>
        <van-field v-model="postData.username" :rules="rules.username" name="username" :placeholder="t('login.username')" left-icon="contact" />
        <van-field v-model="postData.password" :rules="rules.password" name="password" :placeholder="t('login.password')" left-icon="lock" type="password" />
      </van-cell-group>
      <div class="m-16">
        <van-button :loading="loading" round block type="primary" native-type="submit">
          {{ t('login.login') }}
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<route lang="json">
{
  "name": "login",
  "meta": {
    "i18n": "menus.login"
  }
}
</route>
