<script setup lang="ts">
import vw from '@/utils/inline-px-to-vw'

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
    :style="`padding-top: ${vw(paddingT)}; padding-left: ${vw(paddingX)}; padding-right: ${vw(paddingX)}`"
  >
    <slot />
  </main>
</template>
