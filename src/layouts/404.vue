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
  <main p="x4 y16" text-18 text="center gray-300 dark:gray-200">
    <van-icon name="warn-o" size="3em" />

    <RouterView />

    <div class="mt-10">
      <button van-haptics-feedback btn m="3 t8" @click="onBack">
        Back
      </button>
    </div>
  </main>
</template>
