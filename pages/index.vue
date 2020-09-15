<!--
 * @Author: don
 * @Date: 2020-09-15 17:03:04
 * @LastEditors: don
 * @LastEditTime: 2020-09-15 18:20:26
 * @Description: 
-->
<template>
  <div class="container">
    <!-- <Toast mes="TOAST信息" :callback="show" /> -->
    <h1 class="title">ssr-learn</h1>
  </div>
</template>

<script>
export default {
  created() {},
  mounted() {
    this.$toast({
      mes: '测试toast',
      callback: () => {
        this.show()
      },
    })
  },
  methods: {
    show() {
      console.log('xxx xxxxxxxxxxxx')
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: @font-size-24;
  color: @font-color-default;
  letter-spacing: 1px;
}
</style>
