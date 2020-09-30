/*
 * @Author: don
 * @Date: 2020-09-22 16:07:46
 * @LastEditors: don
 * @LastEditTime: 2020-09-30 15:16:10
 * @Description: 用户数据评测记录
 */
export const state = () => ({
  mobile: null, // 评估，手机号
})

export const getters = {}

export const actions = {
  // xxx({ commit }, p) {},
}

export const mutations = {
  SET_PERSON(state, data) {
    state.mobile = data.mobile
  },
}
