import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    vite: false,
    buildModules: [
        '@pinia/nuxt',
    ],
    css: ["~/assets/tailwind.css"],
    meta: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
    }
})
