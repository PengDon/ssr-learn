/*
 * @Author: don
 * @Date: 2020-09-16 15:32:02
 * @LastEditors: don
 * @LastEditTime: 2020-09-16 16:11:59
 * @Description: notify
 */
import Vue from 'vue'
import notify from '@/components/Notify'

const NotifyConstructor = Vue.extend(notify)

const instance = new NotifyConstructor({
  el: document.createElement('div'),
})

let timer = null
let lock = false

NotifyConstructor.prototype.closeNotify = function () {
  instance.classes = 'yd-notify-out'

  setTimeout(() => {
    const el = instance.$el
    el.parentNode && el.parentNode.removeChild(el)
    lock = false
  }, 150)

  typeof this.callback === 'function' && this.callback()
}

const Notify = (options = {}) => {
  instance.classes = ''
  instance.mes = options.mes
  instance.timeout = ~~options.timeout || 5000
  instance.callback = options.callback

  if (lock) return
  lock = true

  document.body.appendChild(instance.$el)

  instance.$el.addEventListener('click', () => {
    clearTimeout(timer)
    instance.closeNotify()
  })

  timer = setTimeout(() => {
    clearTimeout(timer)
    instance.closeNotify()
  }, instance.timeout)
}

export default Notify
