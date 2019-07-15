// 创建路由对象 及 配置路由规则 和 其他路由配置

import VueRouter from 'vue-router' // 导入vue-router
import Vue from 'vue' // 注册vueRouter需要Vue对象   先导入Vue
import Login from '@/views/login' // 导入login组件
import Home from '@/views/home' // 导入home组件
import Welcome from '@/views/welcome' // 导入welcome组件 为 home组件的子组件
import NotFound from '@/views/notfound' // 导入notfound组件
Vue.use(VueRouter) // 注册vueRouter

const router = new VueRouter({ // 初始化router对象  (配置路由规则)
  routes: [
    // 路由走到这个位置，证明没有任何程序去处理这个路径
    { name: '404', path: '*', component: NotFound },
    { name: 'login', path: '/login', component: Login },
    { path: '/',
      component: Home,
      children: [
        { name: 'welcome', path: '/', component: Welcome }
      ]
    }
  ]
})

// 注册一个全局的前置导航守卫
router.beforeEach((to, from, next) => { // to: 即将要进入的目标；from：当前导航正要离开的路由；next: 一定要调用该方法
  // 如果不去主动的去触发 resolve (next 下一步) 会一直等待
  // console.log('0K!')

  // 麻烦
  // 如果是登录页 放行
  // if (to.path === '/login') return next()
  // 判断登录状态
  // const user = window.sessionStorage.getItem('hm-toutiao')
  // if (user) {
  //   next()
  // } else {
  //   next('/login')
  // }

  // 简单
  const user = window.sessionStorage.getItem('hm-toutiao') // 获取token
  if (to.path !== '/login' && !user) return next('/login') // 如果不是去登录页 并且 没有token 就跳转到登录页
  next()
})

export default router // 导出router
