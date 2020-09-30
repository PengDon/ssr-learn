<template>
  <div class="xxx-login">
    <!-- 标题 -->
    <div class="xxx-login-title">账号登录</div>
    <!-- 输入区域 -->
    <div class="xxx-login-input">
      <div class="xxx-login-input-item">
        <span>用户名</span>
        <span
          ><input
            v-model="name"
            type="text"
            maxlength="16"
            placeholder="请输入用户名"
        /></span>
      </div>
      <div class="xxx-login-input-item">
        <span>密码</span>
        <span
          ><input
            v-model="password"
            type="text"
            maxlength="16"
            placeholder="请输入密码"
        /></span>
      </div>
    </div>
    <!-- 按钮区域 -->
    <div class="xxx-login-btns" @click="checkData">登录</div>
  </div>
</template>
<script>
import { login } from '@/api'

export default {
  data() {
    return {
      name: null,
      password: null,
    }
  },
  methods: {
    checkData() {
      if (!this.name) {
        return this.$dialog.notify({ mes: '请输入用户名！' })
      }
      if (!this.password) {
        return this.$dialog.notify({ mes: '请输入密码！' })
      }
      this.LogIn()
    },
    async LogIn() {
      const { $axios } = this
      const res = await login($axios, this.name, this.password)
      if (res.code === 200) {
        this.$router.push({ path: '/' })
      } else {
        this.$dialog.notify({ mes: res.msg })
      }
    },
  },
}
</script>
<style lang="less">
.@{css-prefix} {
  &-login {
    width: 750px;
    &-title {
      margin-top: 240px;
      text-align: center;
    }
    &-input {
      width: 580px;
      margin: 100px auto;
      font-size: 28px;
      font-weight: 400;
      color: #666666;
      &-item {
        width: 100%;
        height: 115px;
        border-bottom: 1px solid #b7b7b7; /** no */
        padding: 0 20px;
        display: flex;
        align-items: center;
        > span {
          display: inline-block;
          &:first-child {
            width: 100px;
          }
          &:last-child {
            margin-left: 30px;
          }
          > input {
            display: block;
            width: 100%;
            height: 100%;
            border: none;
            font-size: inherit;
          }
        }
      }
    }
    &-btns {
      width: 666px;
      margin: 0 auto;
      height: 94px;
      line-height: 94px;
      text-align: center;
      background: #5ba0f7;
      border-radius: 47px;
      font-size: 32px;
      font-weight: 400;
      color: #ffffff;
    }
  }
}
</style>
