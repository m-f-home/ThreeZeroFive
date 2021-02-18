<template>
  <common-header />
  <router-view class="wrap" />
  <common-oprate />
</template>

<script>
export default {
  name: 'app',
  setup() {},
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  width: 100%;
  height: 100%;
  .wrap {
    padding: 10px;
  }
}
</style>
