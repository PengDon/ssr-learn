/*
 * @Author: don
 * @Date: 2020-09-16 15:16:13
 * @LastEditors: don
 * @LastEditTime: 2020-09-17 10:44:57
 * @Description: toast
 */
import Vue from 'vue'
import { pageScroll } from '@/utils/assist'
import toast from '@/components/Toast'

const ToastConstructor = Vue.extend(toast)

const instance = new ToastConstructor({
  el: document.createElement('div'),
})

ToastConstructor.prototype.closeToast = function () {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)

  pageScroll.unlock()

  typeof this.callback === 'function' && this.callback()
}

const Toast = (options = {}) => {
  instance.mes = options.mes
  instance.icon = options.icon
  instance.timeout = ~~options.timeout || 2000
  instance.callback = options.callback

  document.body.appendChild(instance.$el)

  pageScroll.lock()

  const timer = setTimeout(() => {
    clearTimeout(timer)
    instance.closeToast()
  }, instance.timeout + 100)
}

export default Toast
