<template>
  <div class="xxx-home">
    <h1 class="title">组件示例</h1>
    <button @click="toast">toast</button>
    <button @click="alert">alert</button>
    <button @click="confirm">confirm</button>
    <button @click="loading">loading</button>
    <button @click="notify">notify</button>
  </div>
</template>

<script>
import { userList } from '@/api'
export default {
  mounted() {
    this.getUserList()
  },
  methods: {
    // 接口api使用方法二
    // async getGoodsList() {
    //   const self = this
    //   const data = await goodsList(self)
    //   console.log('xxxxxxxxxxxxxxxxxxxx')
    //   console.log(data)
    //   console.log('xxxxxxxxxxxxxxxxxxxx')
    // },
    async getUserList() {
      const { $axios } = this
      const res = await userList($axios)
      console.log(res)
      if (res.code === 200) {
        console.log('成功')
      } else {
        console.log('失败')
      }
    },
    toast() {
      // 第一种写法
      this.$dialog.toast({
        mes: '一个没有任何图标的提示！',
        timeout: 2000,
        callback: () => {
          console.log('点击了toast')
        },
      })
      // 第二种写法
      // Toast({
      //   mes: '一个没有任何图标的提示！',
      // })
    },
    alert() {
      this.$dialog.alert({
        mes: '测试alert',
        callback: () => {
          console.log('点击了alert')
        },
      })
    },
    confirm() {
      // this.$dialog.confirm({
      //   title: 'confirm标题',
      //   mes: '测试confirm',
      //   opts: () => {
      //     console.log('点击了confirm')
      //   },
      // })
      this.$dialog.confirm({
        title: '选填标题',
        mes: '我有一个小毛驴我从来也不骑！',
        opts: [
          {
            txt: '取消',
            color: false,
            callback: () => {
              this.$dialog.toast({ mes: '你点了取消', timeout: 1000 })
            },
          },
          {
            txt: '犹豫一下',
            stay: true,
            color: '#CCC',
            callback: () => {
              this.$dialog.toast({ mes: '别犹豫了', timeout: 1000 })
            },
          },
          {
            txt: '确定',
            color: true,
            callback: () => {
              this.$dialog.toast({ mes: '你点了确定', timeout: 1000 })
            },
          },
        ],
      })
    },
    loading() {
      this.$dialog.loading.open('很快加载好了')
      setTimeout(() => {
        this.$dialog.loading.close()
      }, 2000)
    },
    notify() {
      this.$dialog.notify({
        mes: '5秒后自动消失，点我也可以消失！',
        timeout: 5000,
        callback: () => {
          console.log('我走咯！')
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>
.@{css-prefix} {
  &-home {
    .title {
      font-weight: 700;
      font-size: @font-size-40;
      color: @font-color-default;
      margin: 10px;
    }
  }
}
</style>
