// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/devtools', '@nuxtjs/apollo', '@nuxtjs/strapi', '@nuxt/image'],
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
    },
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: process.env.STRAPI_GRAPHQL_ENDPOINT || '/graphql',
    },
    image: process.env.NODE_ENV === 'production' ? {
        provider: 'cloudinary',
        cloudinary: {
            baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/fetch/`,
            modifiers: {
                effect: 'sharpen:100',
                quality: 'auto:best',
            }
        }
    } : {
        provider: 'ipx',
        static: {
            baseURL: process.env.STRAPI_URL,
        }
    }
})
