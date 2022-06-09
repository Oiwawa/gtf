import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

    ssr: false,
    head: {
        title: 'GTF',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/im/favicon.png' },
        ]
    },

    buildModules: [
        '@nuxtjs/tailwindcss',
    ],

    publicRuntimeConfig: {
        API_URL: process.env.FLAG_API_URL,
    },
})
