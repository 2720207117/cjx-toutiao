// 创建路由对象 及 配置路由规则 和 其他路由配置

import VueRouter from 'vue-router' // 导入vue-router
import Vue from 'vue' // 注册vueRouter需要Vue对象   先导入Vue
import Login from '@/views/login' // 导入login组件
import Home from '@/views/home' // 导入home组件
import Welcome from '@/views/welcome' // 导入welcome组件 为 home组件的子组件
Vue.use(VueRouter) // 注册vueRouter

const router = new VueRouter({ // 初始化router对象  (配置路由规则)
  routes: [
    { name: 'login', path: '/login', component: Login },
    { path: '/',
      component: Home,
      children: [
        { name: 'welcome', path: '/', component: Welcome }
      ]
    }
  ]
})

export default router // 导出router
