<template>
  <div class="xxx-dialog-black-mask">
    <div class="xxx-alert">
      <div class="xxx-alert-bd" v-html="mes"></div>
      <div class="xxx-alert-ft">
        <a
          href="javascript:;"
          class="xxx-alert-btn primary"
          @click.stop="closeAlert"
          >确定</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mes: String,
    callback: Function,
  },
}
</script>
<style lang="less">
.@{css-prefix} {
  &-alert {
    width: 85%;
    background-color: #fafafa;
    border-radius: 2px;
    .font-size(400,15px);
    animation: xxx-kf-zoom-in 0.15s ease forwards;
    &-bd {
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #888;
      line-height: 20px;
      word-break: break-all;
    }

    &-ft {
      position: relative;
      line-height: 40px;
      display: flex;
      &:after {
        .top-line(@line-color);
      }
      > a {
        position: relative;
        text-align: center;
        display: block;
        flex: 1;
        padding: 0 2px;
        &.primary {
          color: #0bb20c;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .@{css-prefix}-alert {
    width: 40%;
  }
}
</style>
