/*
 * @Author: don
 * @Date: 2020-03-19 10:56:59
 * @LastEditTime: 2020-09-15 18:07:20
 * @Description: 结果处理
 */

/**
 * @param result 返回数据结果
 * @param code 返回的code
 * @param message 返回的消息
 * @param isObj 是否要以对象返回
 */
export const axiosResult = (result, code, message, isObj) =>
  new Promise((resolve, reject) => {
    if (Object.is(code, 0)) {
      if (result) {
        isObj ? resolve({ result }) : resolve(result)
      } else {
        isObj ? resolve({ message }) : resolve(message)
      }
    } else {
      reject(message)
    }
  })
