<template>
  <div class="common-header">
    <div class="user-info flex">
      <el-avatar
        :key="avatar"
        :src="avatar"
        class="pointer"
        @click="click"
      ></el-avatar>
    </div>
    <div class="header-nav flex">
      <div v-for="item in list" :key="item.name" class="routes">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import common from '../../utils/index'
import { reactive, toRefs } from 'vue'
export default {
  name: 'common-header',
  props: {},
  setup(props) {
    const avatar = require('../../assets/img/icon.png')
    const data = reactive({
      list: [
        { name: 'Home', path: '/' },
        { name: 'Test', path: '/' },
        { name: 'aaa', path: '/' },
        { name: 'bbb', path: '/' },
        { name: 'ccc', path: '/' },
        { name: 'ddd', path: '/' },
      ],
    })
    const methods = {
      click() {
        console.log(new Date().getTime(), 'out')
        common.debounce(() => {
          console.log(new Date().getTime(), 'in')
        }, 5000)
      },
    }
    // console.log(list)

    return {
      ...toRefs(data),
      ...methods,
      avatar,
    }
  },
}
</script>

<style lang="scss">
.common-header {
  width: 100%;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
  background: azure;
  position: fixed;
  top: 0;
  z-index: 999;
  .user-info {
    float: right;
    height: 100%;
    width: 50px;
  }
  .header-nav {
    height: 100%;
    .routes {
      padding: 5px;
      display: inline-block;
      a:hover {
        color: skyblue;
      }
    }
  }
}
</style>
