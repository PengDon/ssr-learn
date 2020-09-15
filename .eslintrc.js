/*
 * @Author: don
 * @Date: 2020-09-14 11:18:46
 * @LastEditors: don
 * @LastEditTime: 2020-09-15 16:30:46
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  // globals作用：用于配置指定的全局变量无视no-undef规则
  // 问题描述：eslint报错xx is not defined no-undef
  // 解决方案：配置报错的变量如下: xx全局变量:true
  globals: {
    eruda: true,
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
}
