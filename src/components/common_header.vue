<template>
  <div class="common-header">
    <div class="user-info"></div>
    <div class="header-nav">
      <div v-for="item in list" :key="item.name" class="routes">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'common-header',
  props: {},
  setup(props) {
    // console.log(props)
    const list = reactive([
      { name: 'Home', path: '/' },
      { name: 'Test', path: '/' },
      { name: 'aaa', path: '/' },
      { name: 'bbb', path: '/' },
      { name: 'ccc', path: '/' },
      { name: 'ddd', path: '/' },
    ])
    console.log(list)

    return {
      list,
    }
  },
}
</script>

<style lang="scss">
.common-header {
  width: 400px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
  background: azure;
  text-align: center;
  .user-info {
    height: 100px;
  }
  .header-nav {
    background: azure;
    .routes {
      padding: 5px;
    }
  }
}
</style>
