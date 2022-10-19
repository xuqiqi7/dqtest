<template>
  <div >
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学校性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
      return {
          msg:'我是一个',
          myAge:this.age
        }
  },
  methods: {
    updateAge() {
      this.myAge++
    }
  },
  //简单声明接收
  props: ['name', 'age', 'sex']

  // 接受的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number,
    
  // },

  //接受的同时对数据进行类型限制+默认值的指定+必要性原则
  // props: {
  //   name: {
  //     type: String, //name的类型是字符串
  //     require:true  //名字是必要的
  //   },
  //   age: {
  //     type: Number,
  //     default:99 //默认值
  //   },
  //   sex: {
  //     type: String,
  //     require:true
  //   }
  // }
    
}
</script>

