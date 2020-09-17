/*
 * @Author: don
 * @Date: 2020-09-17 10:38:48
 * @LastEditors: don
 * @LastEditTime: 2020-09-17 15:14:31
 * @Description: axios全局配置
 */
import Toast from '@/components/dialog/toast'

export default function ({ $axios, redirect }) {
  // 请求处理
  $axios.onRequest((config) => {
    // console.log('|||||||||||||||||||||||||||||')
    // console.log(config)
    // console.log('|||||||||||||||||||||||||||||')
    // console.log('请求地址：' + config.url)
  })

  // 响应处理
  $axios.onResponse((response) => {
    // console.log('|||||||||||||||||||||||||||||')
    // console.log(response)
    // console.log('|||||||||||||||||||||||||||||')
    // token无效，强制登出
    if (response.data.msg.code === 10001) {
      const self = this
      Toast({
        mes: '系统错误',
      })
      // removeToken()
      // Notification({
      //   title: '系统错误',
      //   message: '用户Token无效，请重新登陆！',
      //   type: 'error',
      // })
      self.$router.push('/login')
    }
  })

  // 错误处理
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      // Notification.error({
      //   title: '接口错误！',
      //   message: '接口状态：400，请联系系统管理员！',
      // })
      redirect('/400')
    }
    // 接口获取错误
    if (isNaN(code)) {
      // Notification.error({
      //   title: '接口错误！',
      //   message: '接口状态：未知，请联系系统管理员！',
      // })
      redirect('/error')
    }
    // 接口不存在
    if (code === 404) {
      // Notification.error({
      //   title: '接口错误！',
      //   message: '接口状态：404，请联系系统管理员！',
      // })
      redirect('/404')
    }
    // 接口传参错误
    if (code === 500) {
      // Notification.error({
      //   title: '接口错误！',
      //   message: '接口状态：500，请联系系统管理员！',
      // })
      redirect('/500')
    }
  })
}
