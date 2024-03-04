<script setup lang="ts">
const route = useRoute()
const router = useRouter()

function onBack() {
  if (history.length > 1)
    history.back()
  else
    router.replace('/')
}

const title = computed(() => {
  const { title } = (route.meta as { title?: string }) || {}
  return title || ''
})
</script>

<template>
  <VanNavBar
    v-show="title"
    :title="title"
    :fixed="true"
    clickable left-arrow
    @click-left="onBack"
  />
</template>
