/*
 * @Author: don
 * @Date: 2020-07-31 14:47:23
 * @LastEditTime: 2020-09-30 15:14:26
 * @Description: 防止刷新页面导致store失效
 */

export default function (ctx) {
  // 离开页面 刷新前 将store中的数据存到session
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('storeCache', JSON.stringify(ctx.store.state))
  })
  // 页面加载完成  将session中的store数据
  window.addEventListener('load', () => {
    const storeCache = sessionStorage.getItem('storeCache')
    if (storeCache) {
      // 将session中的store数据替换到store中
      ctx.store.replaceState(JSON.parse(storeCache))
    }
  })
}
