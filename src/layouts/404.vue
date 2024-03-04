<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y16" text-18 text="center gray-300 dark:gray-200">
    <van-icon name="warn-o" size="3em" />

    <RouterView />

    <div class="mt-10">
      <button van-haptics-feedback btn m="3 t8" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
