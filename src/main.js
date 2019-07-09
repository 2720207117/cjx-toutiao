import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// main.js 职责1：依赖项目需要的资源 (js模块 css资源 ...)
//         职责2：实例化根实例  render()  渲染App组件 然后挂载到#app的容器内
new Vue({
  render: h => h(App)
}).$mount('#app')
