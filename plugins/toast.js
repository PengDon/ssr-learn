/*
 * @Author: don
 * @Date: 2020-09-15 16:44:35
 * @LastEditors: don
 * @LastEditTime: 2020-09-15 16:50:35
 * @Description:
 */
import Vue from 'vue'
import { pageScroll } from '@/assets/js/utils/assist'
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

Vue.prototype.$toast = Toast
