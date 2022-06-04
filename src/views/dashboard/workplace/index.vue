<template>
  <div class="container">
    <span>{{ projects.dataSource.name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useFetchData } from '@/utils/hooks/useFetchData'
import { queryProjectNotice } from '@/api/dashboard/workplace'
export default defineComponent({
  setup() {
    const { context: projects } = useFetchData(() => {
      return queryProjectNotice().then(res => {
        return {
          data: res
        }
      })
    })

    return {
      projects
    }
  }
})

</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
</style>
