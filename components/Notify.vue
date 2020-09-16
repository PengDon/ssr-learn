<template>
  <div class="xxx-notify" :class="classes" v-html="mes"></div>
</template>
<script>
export default {
  data() {
    return {
      classes: '',
    }
  },
  props: {
    mes: String,
    timeout: Number,
    callback: Function,
  },
}
</script>
<style lang="less">
.@{css-prefix} {
  &-notify {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(40, 40, 40, 0.85);
    line-height: 22px;
    .font-size();
    color: #fff;
    padding: 24px;
    opacity: 0;
    animation: xxx-kf-down-in 0.2s linear forwards;
    word-break: break-all;
    text-align: center;
    z-index: @base-zindex * 2000;
    &-out {
      opacity: 1;
      animation: xxx-kf-up-out 0.15s linear forwards;
    }
  }
}
</style>
