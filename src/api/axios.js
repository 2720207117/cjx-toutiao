// 封装axios
import axios from 'axios' // 导入axios

const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/'
//   headers: {     // 如果在这里设置 在客户端删除token信息会报错且无法加载页面 初始化页面的时候就会去获取session信息 里面可能没有token信息     应该在每次请求前去获取token 使用axios提供的请求拦截器
//     Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('hm-toutiao')).token
//   }
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // config     请求配置对象
  // 修改 config
  const user = window.sessionStorage.getItem('hm-toutiao')
  if (user) { // 判断 如果获取到token 就设置token； 如果没有获取到token 就不设置token
    config.headers = {
      Authorization: 'Bearer ' + JSON.parse(user).token
    }
  }
  return config
}, error => {
  // 创建promise对象的方式    new Promise() 结果可能成功可能失败
  // Promise.resolve() 创建一个成功的promise
  // Promise.reject() 创建一个失败的promise
  return Promise.reject(error)
})

export default instance // 导出instance
