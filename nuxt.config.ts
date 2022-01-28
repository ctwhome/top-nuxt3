import { defineNuxtConfig } from 'nuxt3'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfigurationFactory from './pwaConfiguration'

/// //////////////////////////////////////////////
// Site config
// Domain where the website will be deployed
const productionUrl = 'MY-APP-DOMAIN.netlify.app'
const useLocalSupabase = false
const siteName = 'Ctw Top-Nuxt3 - Template'
const siteShortName = 'Nuxt Template'
const siteDescription = 'Ctw Nuxt base template with TailwindCss, content RSS, Supabase Auth, Composition API and many other goodies'
const twitterUser = '@ctwhome'
const isGithubPages = false // true if deployed to github pages
const githubRepositoryName = 'nuxt'
/// //////////////////////////////////////////////

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  // Environment variables
  publicRuntimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },

  meta: {
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // required theme-color: pwa
      { name: 'theme-color', content: '#f69435' },
      { name: 'format-detection', content: 'telephone=no' },
      // OG Social Media Cards
      { hid: 'description', name: 'description', content: siteDescription },
      { property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `https://${productionUrl}` },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: siteDescription },
      { hid: 'og:image', property: 'og:image', content: `https://${productionUrl}/OG-card.png` },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: twitterUser },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', content: `https://${productionUrl}` },
      { hid: 'twitter:title', name: 'twitter:title', content: siteName },
      { hid: 'twitter:description', name: 'twitter:description', content: siteDescription },
      {hid: 'twitter:image', name: 'twitter:image', content: `https://${productionUrl}/OG-card.png`}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      // required manifest, apple-touch-icon and mask-icon: pwa
      // add manifest.webmanifest only on build?
      {rel: 'manifest', href: '/manifest.webmanifest'},
      {rel: 'apple-touch-icon', href: '/pwa/icon-512x512.png', sizes: '180x180'},
      {rel: 'mask-icon', href: '/pwa/icon-512x512.png', color: '#FFF'},
    ],
    scripts: [
      'https://buttons.github.io/buttons.js'
    ],
    htmlAttrs: {
      'lang': 'en',
      'data-theme': 'light' // https://daisyui.com/docs/default-themes
    }
  },
  css: ['~/styles/tailwind.css'],

  // server middleware to serve sw.js, workbox-**.js and manifest.webmanifest
  serverMiddleware: [
    { path: '/', handler: '~/server-middleware/sw.js'},
  ],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  buildModules: [
    // Internationalization with https://github.com/intlify/nuxt3
    '@intlify/nuxt3'
  ],

  vite: {
    plugins: [
      Vue({
        include: [/\.md$/], // <--
      }),
      Markdown({
        headEnabled: false
      }),
      VitePWA(pwaConfigurationFactory(false, undefined, siteName, siteShortName, siteDescription))
    ]
  }
})
