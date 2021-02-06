<template>
  <div class="common-concact">
    <div class="nav">
      <div
        v-for="item in concactList"
        :key="item.name"
        class="nav-items"
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
            <span class="sprite-git" style="cursor: pointer"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'common-concact',
  setup() {
    const concactList = reactive([
      { name: '仓库地址', value: 'git', show: true },
    ])

    function mouseover(item) {
      this.concactList.map((el) => {
        if (el.name === item.name) {
          el.show = false
        }
      })
    }
    function mouseleave(item) {
      this.concactList.map((el) => {
        if (el.name === item.name) {
          el.show = true
        }
      })
    }
    function goGithub() {
      window.open('https://github.com/m-f-home/ThreeZeroFive')
    }
    return {
      concactList,
      mouseover,
      mouseleave,
      goGithub,
    }
  },
}
</script>

<style lang="scss">
.common-concact {
  position: fixed;
  right: 25px;
  bottom: 120px;
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
      display: flex;
      align-items: center;
      justify-content: center;
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
  .slip-in {
    animation: mou-in 0.5s;
    animation-fill-mode: forwards;
  }
  .slip-out {
    animation: mou-out;
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
