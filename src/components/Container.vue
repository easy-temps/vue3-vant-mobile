<script setup lang="ts">
defineProps({
  paddingT: {
    type: Number,
    default: 46,
  },
  paddingX: {
    type: Number,
    default: 16,
  },
})
</script>

<template>
  <main
    class="absolute left-0 h-full w-full overflow-y-auto"
    :style="`padding-top: ${paddingT}px; padding-left: ${paddingX}px; padding-right: ${paddingX}px`"
  >
    <slot />
  </main>
</template>
