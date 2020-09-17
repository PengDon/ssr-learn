/*
 * @Author: don
 * @Date: 2020-09-16 15:15:48
 * @LastEditors: don
 * @LastEditTime: 2020-09-17 10:44:46
 * @Description: alert
 */
import Vue from 'vue'
import { pageScroll } from '@/utils/assist'
import alert from '@/components/Alert'

const AlertConstructor = Vue.extend(alert)

const instance = new AlertConstructor({
  el: document.createElement('div'),
})

const hashChange = function () {
  pageScroll.unlock()

  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}

AlertConstructor.prototype.closeAlert = function () {
  pageScroll.unlock()

  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)

  window.removeEventListener('hashchange', hashChange)

  typeof this.callback === 'function' && this.callback()
}

const Alert = (options = {}) => {
  instance.mes = options.mes
  instance.callback = options.callback

  window.addEventListener('hashchange', hashChange)

  document.body.appendChild(instance.$el)

  pageScroll.lock()
}

export default Alert
