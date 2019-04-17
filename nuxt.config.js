import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/modernizr-2.8.3-respond-1.4.2.min.js', body: false, defer: true },
      { src: '/js/jquery.js', body: false, defer: true },
      { src: '/js/jquery-migrate.min.js', body: false, defer: true },
      { src: '/js/materialize-src/js/bin/materialize.min.js', body: false, defer: true },
      { src: '/components/slick/slick.min.js', body: false, defer: true },
      { src: '/components/skrollr/skrollr.min.js', body: false, defer: true },
      { src: '/components/swipebox/lib/ios-orientationchange-fix.js', body: false, defer: true },
      { src: '/components/swipebox/src/js/jquery.swipebox.min.js', body: false, defer: true },
      { src: '/components/masonry/masonry.min.js', body: false, defer: true },
      { src: '/js/qt-main.js', body: false, defer: true }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/plugins/qt-main', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
