<!--
 * @Author: don
 * @Date: 2020-09-15 17:01:48
 * @LastEditors: don
 * @LastEditTime: 2020-09-15 18:22:34
 * @Description:
-->

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
  { src: '~/plugins/flexible.js', ssr: false },
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

## vscode 添加 eslint 配置,在 setting.json 文件里面添加以下代码

```json
// 自动修复
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // #每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // #每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": true,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  //  #让prettier使用eslint的代码格式进行校验
  "prettier.eslintIntegration": true,
  //  #去掉代码结尾的分号
  "prettier.semi": false,
  //  #使用带引号替代双引号
  "prettier.singleQuote": true,
  //  #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // #让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // #vue组件中html代码格式化样式
    }
  },
  "window.zoomLevel": 0,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "editor.renderControlCharacters": true,
  "editor.renderWhitespace": "all",
```
