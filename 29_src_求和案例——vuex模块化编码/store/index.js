//该文件用于创建Vuex中最为核心的store

//引入vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import countOptions from './Count'
import personOptions from './Person'

Vue.use(Vuex)




//创建store 导出暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})

