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
    animation: xxx-kf-zoom-in 0.06s ease forwards;

    &-content {
      .font-size();
      padding: 24px;
      word-break: break-all;
    }
  }
}
</style>
