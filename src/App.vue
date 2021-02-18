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
  width: 100%;
  height: 100%;
  .wrap {
    margin-top: 60px;
    // min-height: 100%;
    padding: 10px;
  }
}
</style>
