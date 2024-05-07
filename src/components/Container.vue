<script setup lang="ts">
defineProps({
  paddingX: {
    type: Number,
    default: 16,
  },
})
</script>

<template>
  <main
    class="absolute left-0 h-full w-full overflow-y-auto pt-46"
    :style="`padding-left: ${paddingX}px; padding-right: ${paddingX}px`"
  >
    <slot />
  </main>
</template>
