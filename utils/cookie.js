/*
 * @Author: don
 * @Date: 2020-03-18 14:17:34
 * @LastEditTime: 2020-09-16 18:28:19
 * @Description: Cookie
 */
export function Cookie() {
  const doc = window.document
  return {
    /**
     * 获取 Cookie
     * @param {String} name
     * @return {String}
     */
    get: (name) => {
      const m = doc.cookie.match('(?:^|;)\\s*' + name + '=([^;]*)')
      return m && m[1] ? decodeURIComponent(m[1]) : ''
    },
    /**
     * 设置 Cookie
     * @param {String} name 名称
     * @param {String} val 值
     * @param {Number} expires 单位（天）默认一天
     * @param {String} domain 域
     * @param {String} path 所在的目录
     * @param {Boolean} secure 跨协议传递
     */
    set: (options) => {
      const { name, val, expires, domain, path, secure } = options
      let text = String(encodeURIComponent(val))
      const date = new Date()
      date.setTime(
        date.getTime() + parseInt(expires || 1) * 24 * 60 * 60 * 1000
      )
      date instanceof Date && (text += '; expires=' + date.toUTCString())
      !!domain && (text += '; domain=' + domain)
      text += '; path=' + (path || '/')
      secure && (text += '; secure')
      doc.cookie = name + '=' + text
    },
  }
}
