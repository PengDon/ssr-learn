/*
 * @Author: don
 * @Date: 2020-03-30 10:14:41
 * @LastEditTime: 2020-09-17 15:53:59
 * @Description: API接口管理
 */

// get普通请求
export const goodsList = ({ $axios }) => {
  return $axios.$get(`https://api.xxx.com/goods/list`)
}

// get带参请求
export const goodDetail({$axios},goodid) => {
  return $axios.$get(`https://api.xxx.com/goods/`,{
    params:{
      id:goodid
    }
  })
}

// post带参请求
export const login({$axios},username,password)=>{
  return $axios.$post(`https://api.xxx.com/login`,{
     name:username,
     pwd:password
  })
}