<template>
  <div class="xxx-dialog-black-mask">
    <div class="xxx-confirm">
      <div class="xxx-confirm-hd">
        <strong class="xxx-confirm-title" v-html="title"></strong>
      </div>
      <div class="xxx-confirm-bd" v-html="mes"></div>
      <template v-if="typeof opts == 'function'">
        <div class="xxx-confirm-ft">
          <a
            href="javascript:;"
            class="xxx-confirm-btn default"
            @click.stop="closeConfirm(false)"
            >取消</a
          >
          <a
            href="javascript:;"
            class="xxx-confirm-btn primary"
            @click.stop="closeConfirm(false, opts)"
            >确定</a
          >
        </div>
      </template>
      <template v-else>
        <div class="xxx-confirm-ft">
          <a
            href="javascript:;"
            class="xxx-confirm-btn"
            :key="'confirm' + key"
            v-for="(item, key) in opts"
            :class="
              typeof item.color == 'boolean'
                ? item.color
                  ? 'primary'
                  : 'default'
                : ''
            "
            :style="{ color: item.color }"
            @click.stop="closeConfirm(item.stay, item.callback)"
            >{{ item.txt }}</a
          >
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    mes: String,
    opts: {
      type: [Array, Function],
      default: () => {},
    },
  },
}
</script>
<style lang="less">
.@{css-prefix} {
  &-confirm {
    width: 85%;
    background-color: #fafafa;
    border-radius: 2px;
    .font-size();
    animation: xxx-kf-zoom-in 0.15s ease forwards;

    &-hd {
      text-align: left;
      padding: 15px 20px 5px;
    }

    &-title {
      .font-size(700,16px);
      color: #444;
      word-break: break-all;
    }

    &-bd {
      text-align: left;
      padding: 20px;
      color: #888;
      line-height: 20px;
      word-break: break-all;
    }

    &-ft {
      position: relative;
      line-height: 40px;
      margin-top: 14px;
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
        &:not(:last-child):after {
          .right-line(@line-color);
        }
        &.default {
          color: #353535;
        }
        &.primary {
          color: #0bb20c;
        }
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .@{css-prefix}-confirm {
    width: 40%;
  }
}
</style>
