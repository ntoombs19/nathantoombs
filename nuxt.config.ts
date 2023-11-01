// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/devtools', '@nuxtjs/apollo'],
    devtools: {enabled: true},
    ssr: true,
    pages: true,
    nitro: {
        prerender: {
            crawlLinks: true,
            failOnError: false,
        },
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: `${process.env.STRAPI_URL}${process.env.STRAPI_GRAPHQL_ENDPOINT}` || 'http://localhost:1337/graphql',
            },
        },
    }
})
