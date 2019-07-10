import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui' // 导包
import 'element-ui/lib/theme-chalk/index.css' // 引入样式

// 默认会加载索引文件 (索引文件：index.js index.vue index.json ...)
// 在vue-cli创建的项目中 @的前缀 代表的是跟路径 src目录
import router from '@/router'

Vue.use(ElementUI) // 在全局注册组件 (注册element-ui组件库)

Vue.config.productionTip = false

// main.js 职责1：依赖项目需要的资源 (js模块 css资源 ...)
//         职责2：实例化根实例  render()  渲染App组件 然后挂载到#app的容器内
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
