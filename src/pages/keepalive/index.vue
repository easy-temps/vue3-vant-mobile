<script setup>
import { ref } from 'vue'

definePage({
  name: 'keepalive',
  meta: {
    level: 2,
    title: 'keepalive',
  },
})
const msg = ref('')
</script>

<template>
  <div>
    <p>Current component: B</p>
    <span>Message is: {{ msg }}</span>
    <input v-model="msg">
  </div>
</template>
