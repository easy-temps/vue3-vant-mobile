<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { RouteMap } from 'vue-router'
import { useUserStore } from '@/stores'

import logo from '~/images/logo.svg'
import logoDark from '~/images/logo-dark.svg'
import vw from '@/utils/inline-px-to-vw'

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
  email: '',
  password: '',
})

const rules = reactive({
  email: [
    { required: true, message: t('login.pleaseEnterEmail') },
  ],
  password: [
    { required: true, message: t('login.pleaseEnterPassword') },
  ],
})

async function login(values: any) {
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
    <div class="mb-32 mt-20">
      <van-image :src="dark ? logoDark : logo" class="h-120 w-120" alt="brand logo" />
    </div>

    <van-form :model="postData" :rules="rules" validate-trigger="onSubmit" @submit="login">
      <div class="overflow-hidden rounded-3xl">
        <van-field
          v-model="postData.email"
          :rules="rules.email"
          name="email"
          :placeholder="t('login.email')"
        />
      </div>

      <div class="mt-16 overflow-hidden rounded-3xl">
        <van-field
          v-model="postData.password"
          type="password"
          :rules="rules.password"
          name="password"
          :placeholder="t('login.password')"
        />
      </div>

      <div class="mt-16">
        <van-button
          :loading="loading"
          type="primary"
          native-type="submit"
          round block
        >
          {{ $t('login.login') }}
        </van-button>
      </div>
    </van-form>

    <GhostButton block to="register" :style="{ 'margin-top': vw(18) }">
      {{ $t('login.sign-up') }}
    </GhostButton>

    <GhostButton block to="forgot-password">
      {{ $t('login.forgot-password') }}
    </GhostButton>
  </div>
</template>

<route lang="json5">
{
  name: 'login',
  meta: {
    i18n: 'menus.login'
  },
}
</route>
