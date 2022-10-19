<template>
  <div class="app">
    <h1>{{ msg }} 学生姓名是{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getschoolName="getschoolName"></School>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 （第一种写法,使用@或v-on）-->
    <!-- <Student @atguigu="getStudentName" @demo="m1"></Student> -->

    <!--通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "你好啊",
      studentName: "",
    };
  },
  methods: {
    show() {
      alert(1234);
    },
    getschoolName(name) {
      console.log("App收到了学校名：", name);
    },
    getStudentName(name) {
      console.log("App收到了学生名：", name);
      this.studentName = name;
    },
    m1() {
      console.log("demo事件被触发了");
    },
  },
  mounted() {
    this.$refs.student.$on("atguigu", this.getStudentName); //绑定自定义事件
    // this.$refs.student.$once("atguigu", this.getStudentName);//绑定自定义事件（一次）
  },
};
</script>

<style>
.app {
  background-color: gray;
}
</style>