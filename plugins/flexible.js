/*
 * @Author: don
 * @Date: 2020-09-17 16:51:05
 * @LastEditors: don
 * @LastEditTime: 2020-09-17 16:52:28
 * @Description: flexible
 */
;(function (window) {
  /* 设计图文档宽度 */
  const docWidth = 750

  const doc = window.document
  const docEl = doc.documentElement
  const resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize'

  const recalc = (function refreshRem() {
    const clientWidth = docEl.getBoundingClientRect().width

    /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
    docEl.style.fontSize =
      Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 + 'px'

    return refreshRem
  })()

  /* 添加倍屏标识，安卓倍屏为1 */
  docEl.setAttribute(
    'data-dpr',
    window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1
  )

  if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
    /* 添加IOS标识 */
    doc.documentElement.classList.add('ios')
    /* IOS8以上给html添加hairline样式，以便特殊处理 */
    if (
      parseInt(
        window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1],
        10
      ) >= 8
    )
      doc.documentElement.classList.add('hairline')
  }

  if (!doc.addEventListener) return
  window.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(window)
