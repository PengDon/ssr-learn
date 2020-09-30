/*
 * @Author: don
 * @Date: 2020-03-30 10:14:41
 * @LastEditTime: 2020-09-30 17:05:28
 * @Description: API接口管理
 */

// =====> 示例
// // get普通请求
// export const goodsList = ($axios) => {
//   return $axios.$get(`https://api.xxx.com/goods/list`)
// }

// // get带参请求
// export const goodDetail=($axios,goodid) => {
//   return $axios.$get(`https://api.xxx.com/goods/`,{
//     params:{
//       id:goodid
//     }
//   })
// }

// // post带参请求
// export const login=($axios,username,password)=>{
//   return $axios.$post(`https://api.xxx.com/login`,{
//      name:username,
//      pwd:password
//   })
// }

const urlPrefix = 'http://127.0.0.1:7001' // 请求前缀

// =====> 公共接口

/**
 * 登录
 * @param {*} $axios
 * @param {String} name
 * @param {String} password
 */
export const login = ($axios, name, password) => {
  return $axios.$post(`${urlPrefix}/api/v1/login`, {
    name,
    password,
  })
}

/**
 * 获取所有用户信息
 * @param {*} $axios
 */
export const userList = ($axios) => {
  return $axios.$get(`${urlPrefix}/api/v1/users`)
}

// =====> 业务接口
