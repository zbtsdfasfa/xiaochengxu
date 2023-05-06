
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// 引入公共的样式
import './styles/global.scss'
// 引入过滤器
import * as filters from './filters'
// 注册过滤
Object.keys(filters).forEach((key)=>{
  Vue.filter(key, filters[key]);
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif