<template>
  <div class="xxx-dialog-white-mask">
    <div class="xxx-loading">
      <div class="xxx-loading-icon"></div>
      <div class="xxx-loading-txt" v-html="title"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
  },
}
</script>
<style lang="less">
.@{css-prefix} {
  &-loading {
    border-radius: 3px;
    color: #fff;
    background-color: rgba(40, 40, 40, 0.85);
    animation: xxx-kf-zoom-in 0.1s ease forwards;
    display: flex;
    align-items: center;
    padding: 34px;
    height: 48px;
    &-icon {
      width: 28px;
      height: 28px;
      background: url(@icon-loading) no-repeat;
      background-size: 28px 28px;
      animation: xxx-kf-rotate 0.45s linear forwards infinite;
      margin-right: 10px;
    }
    &-txt {
      .font-size();
      color: #fff;
      max-width: 140px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
