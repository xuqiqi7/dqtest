<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>

    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
//引入一个hunhu
// import { hunhe,hunhe2 } from '../mixin'
export default {
  name: "School",
  props: ["getschoolName"],
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  methods: {
    sendSchoolName() {
      this.getschoolName(this.name);
    },
  },
};
</script>

<style scoped>
.school {
  background-color: pink;
  padding: 5px;
}
</style>