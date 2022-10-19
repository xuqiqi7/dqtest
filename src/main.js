
//引入Vue
import { from } from 'core-js/core/array'
import Vue from 'vue'
//引入App
import App from './App.vue'
//按需引入

import { Button, Row, DatePicker } from 'element-ui'


// 完整引入
/* //引入elementui组件库
import ElementUI from 'element-ui';

//引入elementui全部样式
import 'element-ui/lib/theme-chalk/index.css'; */
//关闭Vue的生产提示

Vue.config.productionTip = false

Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-date-picker', DatePicker);


// Vue.use(ElementUI);


//创建vm
const vm = new Vue({
    el: '#app',
    render: h => h(App),



})