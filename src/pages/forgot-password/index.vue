<script setup lang="ts">
import { type RouteMap, useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

const { t } = useI18n()
const router = useRouter()
const userStore = useUserStore()
const loading = ref(false)

const postData = reactive({
  email: '',
  code: '',
  password: '',
  confirmPassword: '',
})

const rules = reactive({
  eamil: [
    { required: true, message: t('forgot-password.pleaseEnterEmail') },
  ],
  code: [
    { required: true, message: t('forgot-password.pleaseEnterCode') },
  ],
  password: [
    { required: true, message: t('forgot-password.pleaseEnterPassword') },
  ],
  confirmPassword: [
    { required: true, message: t('forgot-password.pleaseEnterConfirmPassword') },
  ],
})

async function reset(values: any) {
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

function handleBackLogin() {
  router.replace({ name: 'login' })
}
</script>

<template>
  <div class="m-x-a w-7xl text-center">
    <van-form :model="postData" :rules="rules" @submit="reset">
      <div class="overflow-hidden rounded-3xl">
        <van-field
          v-model="postData.email"
          :rules="rules.eamil"
          name="email"
          :placeholder="t('forgot-password.email')"
        />
      </div>

      <div class="mt-16 overflow-hidden rounded-3xl">
        <van-field
          v-model="postData.code"
          :rules="rules.code"
          name="code"
          :placeholder="t('forgot-password.code')"
        >
          <template #button>
            <van-button size="small" type="primary" plain>
              {{ $t('forgot-password.getCode') }}
            </van-button>
          </template>
        </van-field>
      </div>

      <div class="mt-16 overflow-hidden rounded-3xl">
        <van-field
          v-model="postData.password"
          type="password"
          :rules="rules.password"
          name="password"
          :placeholder="t('forgot-password.password')"
        />
      </div>

      <div class="mt-16 overflow-hidden rounded-3xl">
        <van-field
          v-model="postData.confirmPassword"
          type="password"
          :rules="rules.confirmPassword"
          name="confirmPassword"
          :placeholder="t('forgot-password.comfirmPassword')"
        />
      </div>

      <div class="mt-16">
        <van-button
          :loading="loading"
          type="primary"
          native-type="submit"
          round block
        >
          {{ $t('forgot-password.confirm') }}
        </van-button>
      </div>
    </van-form>

    <div class="mt-16 text-12 text-[var(--van-primary-color)]" @click="handleBackLogin">
      {{ $t('forgot-password.backToLogin') }}
    </div>
  </div>
</template>

<route lang="json">
{
  "name": "forgot-password",
  "meta": {
    "i18n": "menus.forgot-password"
  }
}
</route>
