<template>
  <div ref="dom" class="common-popover">
    <!-- 气泡显示 -->
    <el-popover
      v-if="isPopover"
      :placement="placement"
      :title="title"
      :width="width"
      :trigger="trigger"
    >
      <template #reference>
        <span class="ellipsis pointer">{{ content }}</span>
      </template>
      <span>{{ content }}</span>
    </el-popover>
    <!-- 正常显示 -->
    <div v-else>{{ content }}</div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs } from 'vue'
export default {
  name: 'common-popover',
  props: {
    placement: {
      type: String,
      default: 'top-start',
    },
    title: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: null,
    },
    trigger: {
      type: String,
      default: 'hover',
    },
    content: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const width = ref(0)
    let dom = ref(null)
    const isPopover = computed(() => {
      let len = 0,
        charCode = -1
      for (let i = 0; i < props.content.length; i++) {
        charCode = props.content.charCodeAt(i)
        if (charCode >= 0 && charCode <= 128) len += 10
        else len += 14
      }
      // console.log(len, width, len > width)
      return len > width.value
    })
    const data = reactive({})
    onMounted(() => {
      width.value = dom.value.offsetWidth
    })
    return { ...toRefs(data), isPopover, dom }
  },
}
</script>

<style></style>
