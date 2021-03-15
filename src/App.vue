<template>
  <div>
    <common-header />
    <router-view class="views" />
    <common-oprate :target="target" @backtop="backTop" />
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
export default {
  name: 'app',
  setup() {
    const target = ref()
    const data = reactive({})
    const methods = {
      backTop() {
        target.value.scrollTo({ top: 0, behavior: 'smooth' })
      },
    }
    onMounted(() => {
      target.value = document.getElementById('app')
    })
    return {
      ...toRefs(data),
      ...methods,
      target,
    }
  },
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  width: 100%;
  height: 100%;
  overflow: auto;
  .views {
    padding: 10px;
    height: 1000px;
  }
}
</style>
