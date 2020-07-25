const colors = require('vuetify/es5/util/colors').default
require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
   ** server config
   */
  server: {
    port: process.env.TEMPLATE_SITE_NUXT_PORT,
    host: process.env.TEMPLATE_SITE_NUXT_HOST,
    timing: {
      total: true,
    },
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.blue.base },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.css', '@/assets/css/fontiran.css'],
  /*
   **
   */
  styleResources: {
    sass: '@/assets/sass/*.sass',
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/base',
    '~/plugins/notifier.js',
    '~/plugins/mhandler.js',
    '~/plugins/chartist.js',
    '~/plugins/enums.js',
    '~/plugins/api.js',
    { src: '~/plugins/jpicker.js', mode: 'client' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: { baseURL: process.env.TEMPLATE_API_BASE_URL },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    rtl: true,
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    options: {
      customProperties: true,
    },
    theme: {
      light: true,
      dark: false,
      themes: {
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#17A2B8',
          success: '#4CAF50',
          warning: '#FFC107',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** vurtify page transition
   */
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    // beforeEnter(el) {
    //   console.log('Before enter ...');
    // }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
