/*
 * @Author: don
 * @Date: 2020-09-14 11:18:46
 * @LastEditors: don
 * @LastEditTime: 2020-09-16 16:38:37
 * @Description:
 */
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1,maximum-scale=1,user-scalable=0',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '//cdn.jsdelivr.net/npm/eruda' }],
  },
  /*
   ** Global CSS
   */
  css: [{ src: '@assets/css/reset.less', lang: 'less' }],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/flexible.js', ssr: false },
    { src: '~/plugins/eruda.js', ssr: false },
    { src: '~/plugins/dialog.js', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources', // 对应styleResources属性
  ],
  styleResources: {
    // 全局样式变量、mixin方法
    less: ['./assets/css/variables.less', './assets/css/mixins.less'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: [
      require('postcss-px2rem')({
        remUnit: 75,
      }),
    ],
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost,
  },
}
