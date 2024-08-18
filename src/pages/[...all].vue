<script setup lang="ts">
definePage({
  name: '404',
  meta: {
    title: '404',
    i18n: 'menus.404Demo',
    level: 2,
  },
})

const router = useRouter()

function onBack() {
  if (window.history.state.back)
    history.back()
  else
    router.replace('/')
}
</script>

<template>
  <div class="p-16">
    <div text="center gray-300 dark:gray-200 18">
      <van-icon name="warn-o" size="3em" />
      <div> Not found </div>

      <div class="mt-10">
        <button van-haptics-feedback btn m="3 t8" @click="onBack">
          Back
        </button>
      </div>
    </div>
  </div>
</template>
