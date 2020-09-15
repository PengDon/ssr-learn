/*
 * @Author: don
 * @Date: 2020-03-19 10:38:52
 * @LastEditTime: 2020-09-15 10:58:00
 * @Description: axios常用请求方法封装
 */

import Qs from 'qs'
import request from './request'

export const $get = (url) => {
  return request.get(url)
}

export const $post = (url, postData, headers) => {
  // 处理非application/json场景
  if (headers && headers.headers['Content-Type'] !== 'application/json') {
    postData = Qs.stringify(postData)
  }

  return request.post(url, postData, headers)
}

export const $put = (url, postData) => {
  return request.put(url, postData)
}

export const $delete = (url) => {
  return request.delete(url)
}
