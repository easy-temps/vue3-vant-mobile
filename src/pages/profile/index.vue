<script setup lang="ts">
definePage({
  name: 'profile',
  meta: {
    level: 1,
  },
})

const { t } = useI18n()
</script>

<template>
  <div class="p-16 pt-46">
    <div mx-auto pt-15 text-center text-16 text-dark dark:text-white>
      {{ t('profile.placeholder') }}
    </div>
  </div>
</template>
