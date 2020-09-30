/*
 * @Author: don
 * @Date: 2020-03-18 15:16:00
 * @LastEditTime: 2020-09-30 15:08:22
 * @Description: wx sdk 调用封装
 */

export function WX(data, parms, cb, errorCb) {
  const wx = require('weixin-js-sdk')
  const appId = data.appId || data.appid
  const timestamp = data.timeStamp || data.timestamp
  const nonceStr = data.nonceStr
  const signature = data.signature
  // const packages = data.package
  // const paySign = data.paySign
  // const signType = data.signType || 'MD5'

  // http://203.195.235.76/jssdk/#menu-share
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
    appId, // 必填，公众号的唯一标识
    timestamp, // 必填，生成签名的时间戳
    nonceStr, // 必填，生成签名的随机串
    signature, // 必填，签名，见附录1
    jsApiList: ['onMenuShareAppMessage'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })

  wx.ready(() => {
    if (parms.ShareApp) {
      // 分享给朋友
      wx.onMenuShareAppMessage({
        title: parms.title,
        desc: parms.desc,
        link: parms.link,
        imgUrl: parms.imgUrl,
        trigger(res) {
          // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        },
        success(res) {
          typeof cb === 'function' && cb(res)
        },
        cancel(res) {
          typeof errorCb === 'function' && errorCb(res)
        },
        fail(res) {
          typeof errorCb === 'function' && errorCb(res)
        },
      })
    }

    if (parms.ShareTime) {
      // 分享给朋友圈
      wx.onMenuShareTimeline({
        title: parms.title,
        link: parms.link,
        imgUrl: parms.imgUrl,
        trigger(res) {
          // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        },
        success(res) {
          typeof cb === 'function' && cb(res)
        },
        cancel(res) {
          typeof errorCb === 'function' && errorCb(res)
        },
        fail(res) {
          typeof errorCb === 'function' && errorCb(res)
        },
      })
    }
  })

  wx.error((res) => {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    // console.log('config信息验证失败', res)
  })
}
