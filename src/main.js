// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import F2 from '@antv/f2';
Vue.prototype.$F2= F2;
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
import axios from "axios"
axios.defaults.baseURL = 'http://czapi.wtycms.cn/'
Vue.prototype.$http = axios;
// 添加axios请求拦截器
axios.interceptors.request.use(config=>{
	config.headers['Content-Type']='application/json'
	config.headers['Accept']='application/json'
    let token = sessionStorage.getItem('token')
        if (!config.headers.hasOwnProperty('Authorization') && token) {
          config.headers.Authorization = 'bearer ' + token
        }
    return config
})

import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// import echarts from 'echarts';
// 这里不知道为啥，echarts出不来，只能改成这样的引入方式
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

import router from './router/index'

// 打印插件
import Print from 'vue-print-nb'
Vue.use(Print);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
function receiveMessageFromIframePage(event) {
  // console.log(event.data,event)
  if(typeof(event.data.data)=='string'){
  if (event.data.data.includes('tosy')) {
    // const id = event.data.params
    router.push('enterpriseHome');
  }else if(event.data.data.includes('toBaseInfo')){
    router.push('BaseInfo');
  }else if(event.data.data.includes('toProcessInfo')){
    router.push('ProcessInfo');
  }else if(event.data.data.includes('toFwsyInfo')){
    router.push('FwsyInfo');
  }else if(event.data.data.includes('toPlantInfo')){
    router.push('PlantInfo');
  }else if(event.data.data.includes('toTransportInfo')){
    router.push('TransportInfo');
  }else if(event.data.data.includes('todaohang')){
    router.push('daohang');
  }else if(event.data.data.includes('tocunzheng')){
    router.push('czshow');
  }else if(event.data.data.includes('toLogin')){
    router.push('index');
  }
}
}
window.addEventListener('message', receiveMessageFromIframePage, false)