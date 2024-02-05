// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  $production: {

  },
  $development: {

  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api'
    }
  },
  css: ['./assets/global.scss'],
  app: {
    pageTransition: {
      name: 'slide-right',
      mode: 'out-in'
    },
    head: {
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover'
        },
        {
          name: 'description',
          content: '掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。'
        },
        {
          name: 'keywords',
          content: '掘金,稀土,Vue.js,前端面试题,Kotlin,ReactNative,Python'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer'
        }
      ]
    }
  }
})
