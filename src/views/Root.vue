<template>
  <div ref="root" class="root">
    <div style="width: 200px">
      <common-popover :content="'阿贾克斯较大谁看了大家卡拉觉得老咔叽了'" />
    </div>
    <router-view />
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
import { onMounted, reactive, ref, toRefs } from 'vue'
export default {
  name: 'root',
  setup() {
    const root = ref(null)
    const data = reactive({
      click() {
        common.debounce(() => {
          console.log(new Date().getTime())
        }, 5000)
      },
    })
    onMounted(() => {
      // console.log(root)
    })
    return { ...toRefs(data), root }
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
