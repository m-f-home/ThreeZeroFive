<template>
  <div ref="root" class="root">
    <div style="width: 200px">
      <common-popover :content="'阿贾克斯较大谁看了大家卡拉觉得老咔叽了'" />
    </div>
    <router-view />
    <svg-icon ref="svg" :class="'scissors'" :size="50" @click="svgClick" />
    <svg-test />
    <!-- <div class="home-carousel">
      <el-carousel trigger="click" height="200px" type="card">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div> -->
  </div>
</template>
<script>
import common from '../utils/index'
import { reactive, ref, toRefs } from 'vue'
export default {
  name: 'root',
  setup() {
    const svg = ref()
    const root = ref(null)
    const data = reactive({})
    const methods = {
      svgClick() {
        common.debounce(() => {
          console.log(svg, refs)
        }, 500)
      },
    }
    return {
      ...toRefs(data),
      ...methods,
      root,
      svg,
    }
  },
}
</script>
<style lang="scss">
.root {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
