/*
 * @Author: don
 * @Date: 2020-09-15 18:01:57
 * @LastEditors: don
 * @LastEditTime: 2020-09-30 14:09:54
 * @Description: 可伸缩布局方案，rem计算方式：设计图尺寸px / 100 = 实际rem  例: 100px = 1rem
 */
;(function flexible(window, document) {
  const docEl = document.documentElement
  const dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    const rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    const fakeBody = document.createElement('body')
    const testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }

  /* 添加倍屏标识，安卓倍屏为1 */
  docEl.setAttribute(
    'data-dpr',
    window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1
  )

  if (/iP(hone|od|ad)/.test(window.navigator.userAgent)) {
    /* 添加IOS标识 */
    document.documentElement.classList.add('ios')
    /* IOS8以上给html添加hairline样式，以便特殊处理 */
    if (
      parseInt(
        window.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1],
        10
      ) >= 8
    )
      document.documentElement.classList.add('hairline')
  }
})(window, document)
