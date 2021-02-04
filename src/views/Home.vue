<template>
  <div>
    <div class="flip-box">
      <div
        :class="{ 'flip-front': playFlip }"
        class="flip-item flip-item-front"
      >
        <span>正面</span>
      </div>
      <div :class="{ 'flip-back': playFlip }" class="flip-item flip-item-back">
        <span>反面</span>
      </div>
    </div>
    <button @click="play">点击翻转</button>
  </div>
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
<style scoped>
.flip-box {
  position: relative;
  overflow: hidden;
  height: 100px;
  width: 120px;
}

.flip-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 1s ease-in-out 0s;
  backface-visibility: hidden;
  box-sizing: border-box;
}

.flip-item-front {
  z-index: 2;
  background: red;
  color: white;
}

.flip-item-back {
  transform: rotateY(180deg);
  z-index: 1;
  background: green;
  color: white;
}

.flip-box:hover .flip-item-front {
  transform: rotateY(180deg);
}

.flip-box:hover .flip-item-back {
  transform: rotateY(0deg);
}

.flip-front {
  transform: rotateY(180deg);
}

.flip-back {
  transform: rotateY(0deg);
}
</style>
