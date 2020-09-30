<template>
  <div class="xxx-default-error">
    <div class="xxx-default-error-tip">404</div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less">
.@{css-prefix} {
  &-default-error {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    // 文字模糊动画
    @keyframes animate {
      0% {
        text-shadow: 0 0 0 white;
      }
      40% {
        color: rgba(255, 255, 255, 0);
        text-shadow: 0 0 30px white;
      }
      70% {
        color: rgba(255, 255, 255, 0.4);
        text-shadow: 0 0 10px white;
      }
      90% {
        color: rgba(255, 255, 255, 0.6);
        text-shadow: 0 0 30px white;
      }
      100% {
        text-shadow: 0 0 40px rgba(255, 255, 255, 0);
      }
    }

    &-tip {
      font-size: 200px;
      color: #ffffff;
      letter-spacing: 8px;
      animation: 4s animate infinite linear;
    }
  }
}
</style>
