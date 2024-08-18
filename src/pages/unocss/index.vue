<script setup lang="ts">
definePage({
  name: 'unocss',
  meta: {
    level: 2,
    title: '🎨 Unocss 示例',
    i18n: 'menus.unocssExample',
  },
})
</script>

<template>
  <div class="p-16">
    <h1 class="text-6xl color-pink font-semibold">
      Hello, Unocss!
    </h1>

    <p class="mt-4 text-gray-700 dark:text-white">
      This is a simple example of Unocss in action.
    </p>

    <button class="btn">
      Button
    </button>
  </div>
</template>
