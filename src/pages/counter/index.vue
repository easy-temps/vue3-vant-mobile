<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useCounterStore from '@/stores/modules/counter'

definePage({
  name: 'counter',
  meta: {
    level: 2,
  },
})

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)

function add() {
  counterStore.increment()
}

// back
const onClickLeft = () => history.back()
</script>

<template>
  <div>
    <VanNavBar title="🍍 持久化 Pinia 状态" left-arrow fixed @click-left="onClickLeft" />

    <Container>
      <h1 class="text-6xl color-pink font-semibold">
        Hello, Pinia!
      </h1>
      <p class="mt-4 text-gray-700 dark:text-white">
        This is a simple example of persisting Pinia state.
        To verify its effectiveness, you can refresh the interface and observe it.
      </p>
      <p class="mt-4">
        number：<strong class="text-green-500"> {{ counter }} </strong>
      </p>
      <button class="btn" @click="add">
        Add
      </button>
    </Container>
  </div>
</template>
