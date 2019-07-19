import MyBread from '@/components/my-bread.vue'
// 封装成插件的形式  当使用 Vue.use(插件)时，执行插件的配置对象中install函数 且 传入Vue对象(不需要导入Vue对象)
export default {
  install (Vue) {
  // 注册所有组件在 vue下
    Vue.component(MyBread.name, MyBread)
  // ... 挨个注册其他组件
  }
}
