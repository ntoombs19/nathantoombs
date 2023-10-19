// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  pages: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
})
