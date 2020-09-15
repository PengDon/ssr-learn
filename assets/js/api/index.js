/*
 * @Author: don
 * @Date: 2020-03-30 10:14:41
 * @LastEditTime: 2020-09-15 18:06:42
 * @Description: API接口管理
 */
import { $get } from '~/assets/js/axios'

/**
 * 微信js sdk所需签名参数
 * @param {String} url 需要分享的页面地址
 * @param {String} app_code 微信公众号标识, 传固定值 jz_official
 */
export function getJsTicket(url) {
  return $get('/api/getJsTicket?app_code=jz_official&url=' + url)
}
