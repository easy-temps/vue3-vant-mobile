<script setup lang="ts">
definePage({
  name: '404',
  meta: {
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
  <Container>
    <div text="center gray-300 dark:gray-200 18">
      <van-icon name="warn-o" size="3em" />
      <div> Not found </div>

      <div class="mt-10">
        <button van-haptics-feedback btn m="3 t8" @click="onBack">
          Back
        </button>
      </div>
    </div>
  </Container>
</template>
