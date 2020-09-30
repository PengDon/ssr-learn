/*
 * @Author: don
 * @Date: 2020-09-17 10:38:48
 * @LastEditors: don
 * @LastEditTime: 2020-09-30 16:24:14
 * @Description: axios全局配置
 */
import Toast from '@/components/dialog/toast'

export default function ({ $axios, redirect }) {
  // 请求处理
  $axios.onRequest((config) => {
    config.headers['Content-Type'] = 'application/json'
    // console.log('|||||||||||||||||||||||||||||')
    // console.log(config)
    // console.log('|||||||||||||||||||||||||||||')
    // console.log('请求地址：' + config.url)
    // Toast({ mes: '准备开始请求！' })
  })

  // 响应处理
  $axios.onResponse((response) => {
    // console.log('|||||||||||||||||||||||||||||')
    // console.log(response)
    // console.log('|||||||||||||||||||||||||||||')
  })

  // 错误处理
  $axios.onError((error) => {
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      Toast({ mes: '接口状态：400，请联系系统管理员！' })
      redirect('/400')
    }
    // 接口获取错误
    if (isNaN(code)) {
      Toast({ mes: '接口状态：未知，请联系系统管理员！' })
      redirect('/error')
    }
    // 接口不存在
    if (code === 404) {
      Toast({ mes: '接口状态：404，请联系系统管理员！' })
      redirect('/404')
    }
    // 接口传参错误
    if (code === 500) {
      Toast({ mes: '接口状态：500，请联系系统管理员！' })
      redirect('/500')
    }
  })
}
