<script setup lang="ts">
const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
  else
    router.replace('/')
}
</script>

<template>
  <div text="center gray-300 dark:gray-200 18">
    <van-icon name="warn-o" size="3em" />
    <div> Not found </div>

    <div class="mt-10">
      <button van-haptics-feedback btn m="3 t8" @click="onBack">
        Back
      </button>
    </div>
  </div>
</template>

<route lang="json5">
{
  name: '404',
  meta: {
    title: '404',
    i18n: 'menus.404Demo'
  },
}
</route>
