export default defineNuxtConfig({
  devtools: {
    enabled: true
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
