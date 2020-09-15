/*
 * @Author: don
 * @Date: 2020-03-19 10:05:05
 * @LastEditTime: 2020-09-15 10:58:18
 * @Description: 错误捕获的方法
 */

export const errorCaptured = (func) => {
  return new Proxy(func, {
    async apply(target, thisBinding, args) {
      try {
        return await target.apply(thisBinding, args)
      } catch (e) {
        const {
          data: {
            data: { error },
          },
        } = e
        // console.error(error)
      }
    },
  })
}
