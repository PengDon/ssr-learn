/*
 * @Author: don
 * @Date: 2020-03-18 14:03:54
 * @LastEditTime: 2020-09-17 09:53:26
 * @Description: 公共方法类
 */

export function serialize(value) {
  if (typeof value === 'string') {
    return value
  }
  return JSON.stringify(value)
}

export function deserialize(value) {
  if (typeof value !== 'string') {
    return undefined
  }
  try {
    return JSON.parse(value)
  } catch (e) {
    return value || undefined
  }
}
export function getQueryString(name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = (window.location.hash + window.location.search)
    .replace(/^[^\\?]*\?/, '')
    .match(reg)
  let qs = ''
  if (r != null) {
    qs = decodeURIComponent(r[2])
  }
  return qs
}
/**
 * 根据关键字过滤数组对象返回新的数组对象
 *
 * @static
 * @param {any} key 关键字
 * @param {any} arr 数组对象
 * @param {any} attribute 对象对应的属性
 */
export function filterArrObj(key, arr, attribute) {
  return arr.filter((v) => v[attribute].includes(key))
}
/**
 * 把pars序列号后拼接到url上
 * @param {String} url
 * @param {Object} pars
 */
export function appendPars(url, pars) {
  if (pars == null || pars === '') {
    return url
  }
  const parArray = []
  for (const parName in pars) {
    const par = pars[parName]
    parArray.push(parName + '=' + par)
  }
  if (url.indexOf('?') > 0) {
    url += '&'
  } else {
    url += '?'
  }
  return url + parArray.join('&')
}

/**
 * @description: 滚动加载数据
 * @param {Object} elm
 * @param {Function} fn
 * @return:
 * @example:
 */
export function srocllLoad(elm, fn) {
  elm.addEventListener('scroll', function () {
    const contHt = elm.scrollHeight // 内容高度
    const viewHt = elm.clientHeight // 可见高度
    const srcollHt = elm.scrollTop // 滚动高度
    if (srcollHt / (contHt - viewHt) >= 0.95) {
      fn()
      return false
    }
  })
}

/**
 * @description: Object对象转get请求url参数
 * @param {Object} data
 * @return:
 * @example: '?a=1&b=3'
 */
export function objToUrl(data) {
  const arr = []
  for (const key in data) {
    arr.push(`${key}=${data[key]}`)
  }
  return data ? `?${arr.join('&')}` : ''
}
