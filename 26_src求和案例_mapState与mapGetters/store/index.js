//该文件用于创建Vuex中最为核心的store

//引入vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//准备actions——用于响应组件中的动作
const actions = {
    // jia(context, value) {
    //     console.log('action中的jia呗调用了');
    //     context.commit('JIA', value)
    // },
    // jian(context, value) {
    //     console.log('action中的jia呗调用了');
    //     context.commit('JIAN', value)
    // },
    jiaOdd(context, value) {
        console.log('action中的jiaOdd呗调用了');
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    },

    jiaWait(context, value) {
        console.log('action中的jiaWait呗调用了');
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    },

}
//准备mutations——用于操作数据(state)
const mutations = {
    JIA(state, value) {
        console.log('mutations中的JIA被调用了');

        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations中的JIA被调用了');

        state.sum -= value
    }
}
//准备state——用于存储数据
const state = {
    sum: 0, //当前的和
    school: '尚硅谷',
    subject: '前端'
}
//准备getters———用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}


//创建store 导出暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

