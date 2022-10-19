<template>
  <div>
    <button @click="isshow = !isshow">显示/隐藏</button>

    <!-- transition用于一个元素，transition-group用于两个以上的元素 -->
    <transition-group name="hello" appear>
      <h1 v-show="!isshow" key="1">你好啊</h1>
      <h1 v-show="isshow" key="2">尚硅谷</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow: true,
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
/* 进入的起点 离开的终点*/
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
/* 进入的终点 离开的起点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>