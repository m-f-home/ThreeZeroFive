<template>
  <div class="home"></div>
</template>
<script>
export default {
  data() {
    return {
      playFlip: false,
    }
  },
  methods: {
    play() {
      this.playFlip = !this.playFlip
    },
  },
}
</script>
<style lang="scss"></style>
