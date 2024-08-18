<script setup lang="ts">
const route = useRoute()
const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
  else
    router.replace('/')
}

const { t } = useI18n()

const title = computed(() => {
  if (!route.meta)
    return ''

  return route.meta.i18n ? t(route.meta.i18n) : (route.meta.title || '')
})
</script>

<template>
  <VanNavBar
    v-if="title"
    :title="title"
    :fixed="true"
    clickable left-arrow placeholder
    @click-left="onBack"
  />
</template>
