# ssr-learn

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 插件安装

### 常用缩写说明

--save => -S
--save-dev => -D

### 添加 less 支持

1、安装命令

```sh
# @nuxtjs/style-resources 在所有样式文件中共享变量，混合，函数，支持 SASS, LESS and Stylus
npm i -D less less-loader @nuxtjs/style-resources
```

2、nuxt.config.js 配置

```js
export default {
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    sass: [],
    scss: [],
    less: [],
    stylus: [],
  },
}
```

### px to rem

1、安装插件

```sh
npm install -S postcss-px2rem
```

2、引入 flexible.js

```js
// nuxt.config.js中对应配置
plugins: [
  {src:'~plugins/flexible.js', ssr: false}
],
```

3、配置 nuxt.config.js

```js
// nuxt.config.js中对应配置
build: {
  postcss: [
    require('postcss-px2rem')({
      remUnit: 75
    })
  ],
}
```
