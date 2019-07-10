// 创建路由对象 及 配置路由规则 和 其他路由配置

import VueRouter from 'vue-router' // 导入vue-router
import Vue from 'vue' // 注册vueRouter需要Vue对象   先导入Vue
import Login from '@/views/login' // 导入login组件
Vue.use(VueRouter) // 注册vueRouter

const router = new VueRouter({ // 初始化router对象  (配置路由规则)
  routes: [
    { name: 'login', path: '/login', component: Login }
  ]
})

export default router // 导出router
