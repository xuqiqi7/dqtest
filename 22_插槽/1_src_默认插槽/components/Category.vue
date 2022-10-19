<template>
  <div class="categoty">
    <h3>{{ title }}分类</h3>

    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style scoped>
.categoty {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>