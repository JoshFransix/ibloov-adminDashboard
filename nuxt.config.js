export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'adminDashboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">'
      }
    ],
    script: [
      { hid: 'vuex', src: 'https://unpkg.com/vuex@3.6.2', defer: true },
      {
        src: 'https://d17nz991552y2g.cloudfront.net/app/js/jqueryandencoder.ffa5afd5124fbedceea9.js'
      }
    ]
  },

  // generate: {
  //   done(generator) {
  //     // Copy dist files to public/_nuxt
  //     if (generator.nuxt.options.dev === false && generator.nuxt.options.mode === 'spa') {
  //       const publicDir = join(generator.nuxt.options.rootDir, 'public', '_nuxt')
  //       removeSync(publicDir) //Clear content from previous builds
  //       copySync(join(generator.nuxt.options.generate.dir, '_nuxt'), publicDir)
  //       copySync(join(generator.nuxt.options.generate.dir, '200.html'), join(publicDir, 'index.html'))
  //       removeSync(generator.nuxt.options.generate.dir) //Delete 'Dist' folder from Laravel root
  //     }
  //     // console.log("After generate dist folder");
  //   }
  // },

  // Port
  server: {
    port: process.env.PORT || 8080
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
  ],

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },

  googleFonts: {
    families: {
      Poppins: true,
      'Fira+Sans': true,
      Inter: true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  //   Static rendering for netlify
  target: 'static',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Google Fonts
    '@nuxtjs/google-fonts',
    // Vuetify
    '@nuxtjs/vuetify',
    // Typescript
    '@nuxt/typescript-build'
  ],

  vuetify: {
    optionsPath: './vuetify.options.js'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: true
    }
  }
}
