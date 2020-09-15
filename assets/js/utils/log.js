/*
 * @Author: don
 * @Date: 2020-09-15 11:07:50
 * @LastEditors: don
 * @LastEditTime: 2020-09-15 18:08:08
 * @Description: 日志打印封装
 */

// 使用示例
// log('这是一条简单的log\n')
// log('可以指定标题\n', { title: '标题' })
// log('也可以不要标题\n', { title: '' })
// log('这是一条指定了颜色的log\n', { color: 'blue' })

export function log(msg, { title = 'TITLE', color = 'white' } = {}) {
  const COLOR_CODE = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
  ].indexOf(color)
  if (COLOR_CODE >= 0) {
    const TITLE_STR = title ? `${COLOR_CODE} ${title} ` : ''
    console.log(`${TITLE_STR} ${COLOR_CODE} ${msg}`)
  } else {
    console.log(title ? `${title} ${msg}` : msg)
  }
}
