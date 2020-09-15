/*
 * @Author: don
 * @Date: 2020-03-18 11:23:31
 * @LastEditTime: 2020-09-15 10:54:46
 * @Description: 设备、浏览器判断
 */
let Device = {}
// 兼容nuxt，只在浏览器端执行
if (process.browser) {
  const doc = window.document
  const ua = (window.navigator && window.navigator.userAgent) || ''

  Device = {
    ipad: !!ua.match(/(iPad).*OS\s([\d_]+)/),
    ipod: !!ua.match(/(iPod)(.*OS\s([\d_]+))?/),
    iphone: !Device.ipad && !!ua.match(/(iPhone\sOS)\s([\d_]+)/),
    /**
     * 是否移动终端
     * @return {Boolean}
     */
    isMobile:
      !!ua.match(/AppleWebKit.*Mobile.*/) ||
      'ontouchstart' in doc.documentElement,
    /**
     * 是否IOS终端
     * @returns {boolean}
     */
    isIOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    /**
     * 是否Android终端
     * @returns {boolean}
     */
    isAndroid: !!ua.match(/(Android);?[\s\\/]+([\d.]+)?/),
    /**
     * 是否ipad终端
     * @returns {boolean}
     */
    isIpad: Device.ipad,
    /**
     * 是否ipod终端
     * @returns {boolean}
     */
    isIpod: Device.ipod,
    /**
     * 是否iphone终端
     * @returns {boolean}
     */
    isIphone: Device.iphone,
    /**
     * 是否webview
     * @returns {boolean}
     */
    isWebView:
      (Device.iphone || Device.ipad || Device.ipod) &&
      !!ua.match(/.*AppleWebKit(?!.*Safari)/i),
    /**
     * 是否微信端
     * @returns {boolean}
     */
    isWeixin: ua.includes('MicroMessenger'),
    /**
     * 是否火狐浏览器
     */
    isMozilla: /firefox/.test(navigator.userAgent.toLowerCase()),
    /**
     * 是否小程序
     */
    isSmallProgram: ua.toLowerCase().includes('miniprogram'),
    /**
     * 设备像素比
     */
    pixelRatio: window.devicePixelRatio || 1,
  }
}
export { Device }
