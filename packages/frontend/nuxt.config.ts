export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'innsoft test',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
    },
  },
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
  ],
  modules: [
    '@nuxtjs/i18n',
  ],
  css: [
    '~/assets/css/bootstrap.scss',
  ],
  runtimeConfig: {
    public: {
      apiURI: process.env.API_URI,
    }
  },
})
