export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/bootstrap-vue/custom.scss',
    '~/assets/scss/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // Plugins
    '~/plugins/i18n.js',
    // Utilities
    '~/utils/bus.js', // Event bus
    '~/utils/filters.js', // Filters for displaying text
    '~/utils/utils.js', // Global helper functions, use this.$function_name()
    // Constant shop
    '~/constants/shop.js' // Global variables, use this.$variable
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    middleware: 'i18n'
  },
  generate: {
    routes: ['/', '/vi']
    // must have _lang folder in pages and exact views,
    // ['/', '/something', '/en', '/en/something']
    // the views outside of _lang folder only import from the views in _lang folder
    // For ex:
    // pages
    //   _lang
    //     about.vue
    //   about.vue (import About from '~/pages/_lang/about'; export default About)
    // sorry, i have to explain it right :D
  },
}
