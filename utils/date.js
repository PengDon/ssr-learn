/*
 * @Author: don
 * @Date: 2020-03-18 14:27:43
 * @LastEditTime: 2020-09-15 10:54:09
 * @Description: 时间日期
 */

const padLeftZero = (str) => {
  return `00${str}`.substr(str.length)
}

/**
 * @description: 日期格式化
 * @param {date} 时间戳
 * @param {format} 格式
 * @return:
 * @example:
 */
export function formatDate(opts) {
  let { date, format } = opts
  // 如果date没值，则创建Date对象
  // 如果date是时间戳，则转换为Date对象
  date =
    date === undefined
      ? new Date()
      : (date = date instanceof Date ? date : new Date(date))

  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }

  const obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDay(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }
  // eslint-disable-next-line no-unused-vars
  for (const key in obj) {
    if (new RegExp(`(${key})`).test(format)) {
      const str = obj[key] + ''
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }

  return format
}
