<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "chearAllTodo"],
  methods: {
    checkAll(e) {
      // console.log(e.target.checked);
      this.checkAllTodo(e.target.checked);
    },
  },
  computed: {
    clearAll() {
      this.chearAllTodo();
    },
    isAll() {
      return this.doneTotal === this.total && this.total;
    },
    total() {
      return this.todos.length;
    },
    doneTotal() {
      let i = 0;
      this.todos.forEach((todo) => {
        if (todo.done) i++;
      });
      return i;
    },
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>