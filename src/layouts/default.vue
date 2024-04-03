<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <main p="16" text="gray-700 dark:gray-200">
    <RouterView />

    <div mx-auto mb-60 pt-15 text-center text-10 text-gray-500>
      [{{ t('layouts.defaultLayout') }}]
    </div>
  </main>
</template>
