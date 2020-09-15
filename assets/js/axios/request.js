/*
 * @Author: don
 * @Date: 2020-03-18 16:13:58
 * @LastEditTime: 2020-09-15 17:54:03
 * @Description: axios全局配置
 */
import axios from 'axios'

// 获取当前环境下的全局变量
// const protocol = process.env.VUE_APP_protocol
// const domain = process.env.VUE_APP_domain
const baseUrl = 'https://api.xxx.com'

// 设置默认
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 60 * 1000
// 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.withCredentials = true
// 创建实例对象
const service = axios.create()
// 拦截请求
service.interceptors.request.use(
  (config) => request(config),
  (rejection) => requestError(rejection)
)
// 拦截响应
service.interceptors.response.use(
  (res) => response(res),
  (error) => responseError(error)
)

// 成功请求的方法
const request = (config) => {
  // 处理请求地址
  const url = config.url
  if (isHttpUrl(url)) {
    config.url = url
  } else {
    config.url = `${baseUrl}${url}`
  }
  return config
}
// 失败请求的方法
const requestError = (rejection) => {
  return useOrigin(rejection)
    ? Promise.reject(rejection)
    : Promise.reject(rejection.data)
}
// 成功响应的方法
const response = (response) => {
  const res = response.data
  if (response.status === 200) {
    return Promise.resolve(res)
  } else {
    return Promise.reject(response)
  }
}
// 响应失败的方法
const responseError = (error) => {
  if (error.response && error.response.status) {
    let $path
    let $message
    let $errorInfo
    if (error.response.data) {
      const { path, message, data } = error.response.data
      $path = path
      $message = message
      $errorInfo = Array.isArray(data.error) ? data.error.join(',') : data.error
    }
    switch (error.response.status) {
      case 400:
        // console.log(`错误的请求:${$path}-${$errorInfo}`)
        break
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        // console.log('你没有登录,请先登录')
        // router.replace({
        //   path: '/login',
        //   query: {
        //     redirect: router.currentRoute.fullPath
        //   }
        // })
        // window.location.reload()
        break

      // 403 token过期
      // 登录过期对用户进行提示
      // 清除本地token和清空vuex中token对象
      // 跳转登录页面
      case 403:
        // console.log('登录过期，请重新登录')
        // // 清除全部的缓存数据
        // window.localStorage.clear()
        // window.location.reload()
        // // store.commit('loginSuccess', null);
        // // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        // setTimeout(() => {
        //   router.replace({
        //     path: '/login',
        //     query: {
        //       redirect: router.currentRoute.fullPath
        //     }
        //   })
        // }, 1000)
        break

      // 404请求不存在
      case 404:
        // console.log('网络请求不存在')
        break
      // 其他错误，直接抛出错误提示
      default:
        // console.log('我也不知道是什么错误')
        // console.log(`错误：${$message}`)
        break
    }
  }
  return error.response ? Promise.reject(error.response) : Promise.reject(error)
}
// 判断是不是是完整的请求
const isHttpUrl = (url) => {
  return /^https?:\/\//.test(url)
}
// const isPlainRequest = (url) => {
//   return /\.(html?|xml|txt)$/.test(url)
// }
const useOrigin = (res) => {
  return res.config.useOrigin
}

export default service
