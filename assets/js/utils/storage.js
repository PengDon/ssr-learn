/*
 * @Author: don
 * @Date: 2020-03-18 14:03:16
 * @LastEditTime: 2020-09-15 10:52:22
 * @Description: storage
 */
import { serialize, deserialize } from './comm'

/**
 * this.$util.Storage().set()
 */
export function Storage(type) {
  const ls =
    type && type === 'localStorage'
      ? window.localStorage
      : window.sessionStorage
  if (!ls) {
    return null
  }
  return {
    set: (key, value) => {
      ls.setItem(key, serialize(value))
    },
    get: (key) => {
      return deserialize(ls.getItem(key))
    },
    remove: (key) => {
      ls.removeItem(key)
    },
    clear: () => {
      ls.clear()
    },
  }
}
