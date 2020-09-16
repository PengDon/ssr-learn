/*
 * @Author: don
 * @Date: 2020-09-16 15:14:52
 * @LastEditors: don
 * @LastEditTime: 2020-09-16 15:44:32
 * @Description: 提示框封装
 */
import Vue from 'vue'
import Alert from '@/components/dialog/alert'
import Confirm from '@/components/dialog/confirm'
import Loading from '@/components/dialog/loading'
import Notify from '@/components/dialog/notify'
import Toast from '@/components/dialog/toast'

Vue.prototype.$dialog = {
  alert: Alert,
  confirm: Confirm,
  loading: Loading,
  notify: Notify,
  toast: Toast,
}
