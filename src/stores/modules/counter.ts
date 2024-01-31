import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', () => {
  const counter = ref(0)

  const increment = () => {
    counter.value++
  }

  return {
    counter,
    increment,
  }
}, {
  persist: true,
})

export default useCounterStore
