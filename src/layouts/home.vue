<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <main text="gray-700 dark:gray-200">
    <RouterView />

    <div mx-auto mt-15 text-center text-10 text-gray-500>
      [{{ t('layouts.homeLayout') }}]
    </div>

    <TabBar />
  </main>
</template>
