<template>
  <svg class="svg-icon" aria-hidden="true" :style="svgStyle">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'svg-icon',
  props: {
    class: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
    },
    color: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const iconName = computed(() => {
      return `#icon-${props.class}`
    })
    const svgStyle = computed(() => {
      return {
        width: props.size + 'px',
        height: props.size + 'px',
        color: props.color,
      }
    })
    return { iconName, svgStyle }
  },
}
</script>

<style>
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
