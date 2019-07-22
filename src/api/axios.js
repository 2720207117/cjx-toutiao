// 封装axios
import axios from 'axios' // 导入axios

import JSONBig from 'json-bigint' // 导入json-bigint包 (目的：准确转换数据)

const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0/',
  //   headers: {     // 如果在这里设置 在客户端删除token信息会报错且无法加载页面 初始化页面的时候就会去获取session信息 里面可能没有token信息     应该在每次请求前去获取token 使用axios提供的请求拦截器
  //     Authorization: 'Bearer ' + JSON.parse(window.sessionStorage.getItem('hm-toutiao')).token
  //   }

  // 转换响应数据 (目的: 自己转换的数据要比axios自动转换的数据要更准确 方便使用id 删除数据)
  transformResponse: [ (data) => {
    // 处理格式
    // data 可能没有数据 为null 严谨判断
    if (data) {
      return JSONBig.parse(data)
    }
    return data
  }]
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

// 响应拦截器   (token有效期为两小时，token失效时，服务端会认为未认证，提示 401错误。处理：重新登录)
instance.interceptors.response.use(response => {
  return response // 默认写法 如果不return 无法拿到响应结果
}, (error) => {
  // 抛错之前 做自己的事情：错误的时候
  // 如果响应状态码是 401 拦截到登录页面
  // error.response.status   错误信息的响应状态码
  console.dir(error)
  if (error.response.status === 401) {
    // hash 是location提供的获取 或 操作地址栏的 # 后的地址的属性   (location还可以操作href :会跳转页面；hash不会跳转页面)
    location.hash = '#/login'
  }
  return Promise.reject(error)
})

export default instance // 导出instance
