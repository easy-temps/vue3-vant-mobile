<script setup lang="ts">
definePage({
  name: 'unocss',
  meta: {
    level: 2,
  },
})

// back
const onClickLeft = () => history.back()
</script>

<template>
  <div>
    <VanNavBar title="🪶 Unocss" left-arrow fixed @click-left="onClickLeft" />

    <div class="h-100vh w-full px-20 py-60">
      <h1 class="text-6xl color-pink font-semibold">
        Hello, Unocss!
      </h1>
      <p class="mt-4 text-gray-700 dark:text-white">
        This is a simple example of Unocss in action.
      </p>
      <button class="btn border-none btn-green">
        Click me
      </button>
    </div>
  </div>
</template>
