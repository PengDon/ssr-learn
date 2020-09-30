/*
 * @Author: don
 * @Date: 2020-03-18 11:23:31
 * @LastEditTime: 2020-09-30 15:06:50
 * @Description: 设备、浏览器判断
 */

export function Device() {
  const doc = window.document
  const ua = (window.navigator && window.navigator.userAgent) || ''
  const ipad = !!ua.match(/(iPad).*OS\s([\d_]+)/) // 是否ipad终端
  const ipod = !!ua.match(/(iPod)(.*OS\s([\d_]+))?/) // 是否ipod终端
  const iphone = !ipad && !!ua.match(/(iPhone\sOS)\s([\d_]+)/) // 是否iphone终端
  return {
    isMobile:
      !!ua.match(/AppleWebKit.*Mobile.*/) ||
      'ontouchstart' in doc.documentElement, // 是否移动终端
    isIOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // 是否IOS终端
    isAndroid: !!ua.match(/(Android);?[\s\\/]+([\d.]+)?/), // 是否Android终端
    isWebView:
      (iphone || ipad || ipod) && !!ua.match(/.*AppleWebKit(?!.*Safari)/i), // 是否webview
    isWeixin: ua.includes('MicroMessenger'), // 是否微信端
    isSmallProgram: ua.toLowerCase().includes('miniprogram'), // 是否小程序
    pixelRatio: window.thisPixelRatio || 1, // 设备像素比
  }
}
