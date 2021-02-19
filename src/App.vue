<template>
  <div class="root">
    <common-header />
    <router-view class="wrap" />
    <common-oprate :target="target" @backtop="backTop" />
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
// http://mock.51y.cc:81/docs mock数据
export default {
  name: 'app',
  setup() {
    const target = ref()
    const data = reactive({
      backTop() {
        target.value.scrollTo({ top: 0, behavior: 'smooth' })
      },
    })
    onMounted(() => {
      target.value = document.getElementById('app')
    })
    return { ...toRefs(data), target }
  },
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  width: 100%;
  height: 100%;
  overflow: auto;
  .wrap {
    padding: 10px;
    height: auto;
  }
}
</style>
