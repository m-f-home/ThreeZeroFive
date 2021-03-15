<template>
  <div class="common-oprate">
    <div class="nav">
      <div
        v-for="item in oprateList"
        :key="item.name"
        class="nav-items flex"
        @mouseover="mouseover(item)"
        @mouseleave="mouseleave(item)"
      >
        <div class="block">
          <span
            style="width: 44px"
            :class="item.show ? 'slip-out' : 'slip-in'"
            >{{ item.name }}</span
          >
          <span
            style="padding: 0; left: -44px"
            :class="item.show ? 'slip-out' : 'slip-in'"
            @click="goGithub"
          >
            <span class="sprite-git-icon" style="cursor: pointer"></span>
          </span>
        </div>
      </div>
    </div>
    <div
      :class="[
        'back-top',
        'flex',
        showBackTop ? '' : 'hide',
        hover ? 'sprite-top-hover' : 'sprite-top',
      ]"
      @click="backTop"
      @mouseover="hover = true"
      @mouseout="hover = false"
    ></div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from 'vue'
export default {
  name: 'common-oprate',
  props: {
    target: HTMLDivElement,
  },
  emits: ['backtop'],
  setup(props, context) {
    const hover = ref(false)
    const showBackTop = ref(false)
    const data = reactive({
      oprateList: [{ name: '仓库地址', value: 'git', show: true }],
    })
    const methods = {
      mouseover(item) {
        this.oprateList.map((el) => {
          if (el.name === item.name) {
            el.show = false
          }
        })
      },
      mouseleave(item) {
        this.oprateList.map((el) => {
          if (el.name === item.name) {
            el.show = true
          }
        })
      },
      goGithub() {
        window.open('https://github.com/m-f-home/ThreeZeroFive')
      },
      backTop() {
        context.emit('backtop')
      },
    }
    onMounted(() => {
      setTimeout(() => {
        props.target.addEventListener('scroll', () => {
          let top = props.target.scrollTop
          showBackTop.value = top > 300 ? true : false
        })
      }, 100)
    })
    return { ...toRefs(data), ...methods, showBackTop, hover }
  },
}
</script>

<style lang="scss">
.common-oprate {
  position: fixed;
  right: calc(44px - 100vw + 100%);
  bottom: 62px;
  transition: all 0.5s;
  .nav {
    text-align: center;
    position: relative;
    .nav-items {
      width: 44px;
      height: 44px;
      background: #fff;
      border-radius: 4px;
      margin: 5px 0;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;
      .block {
        position: relative;
        top: 0;
        width: 100%;
        height: 100%;
        left: 0;
        overflow: hidden;
      }
      span {
        color: #409eff;
        line-height: 18px;
        display: inline-block;
        position: absolute;
        left: 0;
        padding: 4px;
      }
    }
  }
  .back-top {
    margin-top: 20px;
    display: block;
    width: 44px;
    height: 64px;
    cursor: pointer;
    opacity: 1;
    transition: height 0.5s, opacity 0.5s;
  }
  .hide {
    opacity: 0;
    height: 0;
  }
  .slip-in {
    animation: mou-in 0.5s;
    animation-fill-mode: forwards;
  }
  .slip-out {
    animation: mou-out 0.5s;
    animation-fill-mode: forwards;
  }
}
@keyframes mou-in {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 44px;
  }
}
@keyframes mou-out {
  0% {
    margin-left: 44px;
  }
  100% {
    margin-left: 0;
  }
}
</style>
