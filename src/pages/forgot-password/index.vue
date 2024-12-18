<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { FieldRule } from 'vant'
import { useUserStore } from '@/stores'
import vw from '@/utils/inline-px-to-vw'

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

const validatorPassword = (val: string) => val === postData.password

const rules = reactive({
  email: [
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
    { required: true, validator: validatorPassword, message: t('forgot-password.passwordsDoNotMatch') },
  ] as FieldRule[],
})

async function reset() {
  try {
    loading.value = true

    const res = await userStore.reset()

    if (res.code === 0) {
      showNotify({ type: 'success', message: t('forgot-password.passwordResetSuccess') })
      router.push({ name: 'login' })
    }
  }
  finally {
    loading.value = false
  }
}

const isGettingCode = ref(false)

const buttonText = computed(() => {
  return isGettingCode.value ? t('forgot-password.gettingCode') : t('forgot-password.getCode')
})

async function getCode() {
  if (!postData.email) {
    showNotify({ type: 'warning', message: t('forgot-password.pleaseEnterEmail') })
    return
  }

  isGettingCode.value = true
  const res = await userStore.getCode()
  if (res.code === 0)
    showNotify({ type: 'success', message: `${t('forgot-password.sendCodeSuccess')}: ${res.result}` })

  isGettingCode.value = false
}
</script>

<template>
  <div class="m-x-a w-7xl text-center">
    <van-form :model="postData" :rules="rules" validate-trigger="onSubmit" @submit="reset">
      <div class="overflow-hidden rounded-3xl">
        <van-field
          v-model.trim="postData.email"
          :rules="rules.email"
          name="email"
          :placeholder="t('forgot-password.email')"
        />
      </div>

      <div class="mt-16 overflow-hidden rounded-3xl">
        <van-field
          v-model.trim="postData.code"
          :rules="rules.code"
          name="code"
          :placeholder="t('forgot-password.code')"
        >
          <template #button>
            <van-button size="small" type="primary" plain @click="getCode">
              {{ buttonText }}
            </van-button>
          </template>
        </van-field>
      </div>

      <div class="mt-16 overflow-hidden rounded-3xl">
        <van-field
          v-model.trim="postData.password"
          type="password"
          :rules="rules.password"
          name="password"
          :placeholder="t('forgot-password.password')"
        />
      </div>

      <div class="mt-16 overflow-hidden rounded-3xl">
        <van-field
          v-model.trim="postData.confirmPassword"
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

    <GhostButton to="login" block :style="{ 'margin-top': vw(8) }">
      {{ $t('forgot-password.backToLogin') }}
    </GhostButton>
  </div>
</template>

<route lang="json5">
{
  name: 'forgot-password',
  meta: {
    i18n: 'menus.forgot-password'
  },
}
</route>
