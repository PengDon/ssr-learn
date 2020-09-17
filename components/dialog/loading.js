/*
 * @Author: don
 * @Date: 2020-09-16 15:16:06
 * @LastEditors: don
 * @LastEditTime: 2020-09-16 18:23:35
 * @Description: loading
 */
import Vue from 'vue'
import { pageScroll } from '@/utils/assist'
import loading from '@/components/Loading'

const LoadingConstructor = Vue.extend(loading)

const instance = new LoadingConstructor({
  el: document.createElement('div'),
})

LoadingConstructor.prototype.open = (title) => {
  instance.title = title || '正在加载'

  document.body.appendChild(instance.$el)

  pageScroll.lock()
}

LoadingConstructor.prototype.close = function () {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)

  pageScroll.unlock()
}

export default {
  open: instance.open,
  close: instance.close,
}
