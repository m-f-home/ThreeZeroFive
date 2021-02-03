<template>
  <div class="common-header">
    <div class="user-info">

    </div>
    <div class="header-nav">
      <div class="routes" v-for="item in list" :key="item.name">
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
      { name: 'Test', path: '/' }
    ])
    console.log(list)

    return {
      list
    }
  }
}
</script>

<style lang="scss">
  .common-header {
    width: 400px;
    height: 100%;
    .user-info {
      height: 100px;
    }
  }
</style>