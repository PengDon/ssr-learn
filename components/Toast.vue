<template>
  <div ref="xxxToast" class="xxx-dialog-white-mask">
    <div class="xxx-toast">
      <p class="xxx-toast-content" v-html="mes"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mes: String,
    timeout: {
      type: Number,
      default: 2000,
    },
    callback: Function,
  },
  mounted() {
    this.closeToast()
  },
  methods: {
    closeToast() {
      const time = setTimeout(() => {
        clearTimeout(time)
        this.$refs.xxxToast.remove()
        typeof this.callback === 'function' && this.callback()
      }, this.timeout)
    },
  },
}
</script>

<style lang="less">
.@{css-prefix} {
  &-toast {
    min-width: 124px;
    max-width: 80%;
    background: rgba(40, 40, 40, 0.85);
    text-align: center;
    border-radius: 3px;
    color: #fff;
    animation: yd-kf-zoom-in 0.06s ease forwards;

    &-content {
      font-size: 14px;
      padding: 22px 15px;
      word-break: break-all;
    }
  }
}
</style>
