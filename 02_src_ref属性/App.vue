<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点我输入上方的Dom元素</button>
        <School ref="sch" />
    </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name: 'App',
    components: { School },
    data() {
        return {
            msg:'欢迎'
        }
    },

    methods: {
        showDom() {
            console.log(this.$refs.title);
            console.log(this.$refs.btn);
            console.log(this.$refs.sch); //School组件的实例对象

        }
    }
}
</script>
